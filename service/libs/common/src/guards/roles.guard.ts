import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Inject,
  Injectable,
  Logger,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom, timeout, catchError, throwError } from 'rxjs';
import { Request } from 'express';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { SERVICES } from '../constants/services.constants';
import { JwtPayload } from '../interfaces/jwt-payload.interface';

interface RolesRequest extends Request {
  user?: JwtPayload;
  tenantId?: string;
  userRoles?: string[];
}

@Injectable()
export class RolesGuard implements CanActivate {
  private readonly logger = new Logger('RolesGuard');

  constructor(
    private readonly reflector: Reflector,
    @Inject(SERVICES.AUTH_SERVICE) private readonly authClient: ClientProxy,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!requiredRoles || requiredRoles.length === 0) {
      return true;
    }

    const req = context.switchToHttp().getRequest<RolesRequest>();
    const user = req.user;

    if (!user) {
      throw new ForbiddenException('User not authenticated');
    }

    const tenantId = req.tenantId ?? user.tenantId;

    const userRoles = await this.getUserRoles(user.sub, tenantId);

    const hasRole = requiredRoles.some((role) => userRoles.includes(role));

    if (!hasRole) {
      this.logger.warn(
        `User ${user.sub} has roles [${userRoles.join(', ')}] but needs one of [${requiredRoles.join(', ')}]`,
      );
      throw new ForbiddenException(
        `Required role: ${requiredRoles.join(' or ')}`,
      );
    }

    req.userRoles = userRoles;

    return true;
  }

  private async getUserRoles(
    userId: string,
    tenantId: string,
  ): Promise<string[]> {
    try {
      return await firstValueFrom(
        this.authClient
          .send<string[]>('auth.getUserRoles', { userId, tenantId })
          .pipe(
            timeout(5000),
            catchError((err: Error) => {
              this.logger.error(
                `Failed to fetch roles for user ${userId}: ${err.message}`,
              );
              return throwError(
                () => new ForbiddenException('Unable to verify roles'),
              );
            }),
          ),
      );
    } catch (err) {
      if (err instanceof ForbiddenException) throw err;
      throw new ForbiddenException('Unable to verify roles');
    }
  }
}
