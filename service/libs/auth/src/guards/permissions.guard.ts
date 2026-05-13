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
import { PERMISSIONS_KEY } from '../decorators/permissions.decorator';
import { JwtPayload } from '../interfaces/jwt-payload.interface';
import { SERVICES } from '@libs/common';

interface PermissionRequest extends Request {
  user?: JwtPayload;
  tenantId?: string;
  userPermissions?: string[];
}

@Injectable()
export class PermissionsGuard implements CanActivate {
  private readonly logger = new Logger('PermissionsGuard');

  constructor(
    private readonly reflector: Reflector,
    @Inject(SERVICES.AUTH_SERVICE) private readonly authClient: ClientProxy,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredPermissions = this.reflector.getAllAndOverride<string[]>(
      PERMISSIONS_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!requiredPermissions || requiredPermissions.length === 0) {
      return true;
    }

    const req = context.switchToHttp().getRequest<PermissionRequest>();
    const user = req.user;

    if (!user) {
      throw new ForbiddenException('User not authenticated');
    }

    const tenantId = req.tenantId ?? user.tenantId;

    const userPermissions = await this.getUserPermissions(user.sub, tenantId);

    const hasAllPermissions = requiredPermissions.every((perm) =>
      userPermissions.includes(perm),
    );

    if (!hasAllPermissions) {
      const missing = requiredPermissions.filter(
        (perm) => !userPermissions.includes(perm),
      );
      this.logger.warn(
        `User ${user.sub} missing permissions: ${missing.join(', ')}`,
      );
      throw new ForbiddenException(
        `Missing permissions: ${missing.join(', ')}`,
      );
    }

    req.userPermissions = userPermissions;

    return true;
  }

  private async getUserPermissions(
    userId: string,
    tenantId: string,
  ): Promise<string[]> {
    try {
      const result = await firstValueFrom(
        this.authClient
          .send<string[]>('auth.getUserPermissions', { userId, tenantId })
          .pipe(
            timeout(5000),
            catchError((err: Error) => {
              this.logger.error(
                `Failed to fetch permissions for user ${userId}: ${err.message}`,
              );
              return throwError(
                () => new ForbiddenException('Unable to verify permissions'),
              );
            }),
          ),
      );

      return result ?? [];
    } catch (err) {
      if (err instanceof ForbiddenException) throw err;
      throw new ForbiddenException('Unable to verify permissions');
    }
  }
}
