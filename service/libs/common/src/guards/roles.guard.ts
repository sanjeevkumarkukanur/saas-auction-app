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
import { firstValueFrom, timeout, catchError } from 'rxjs';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { AUTH_SERVICE } from '../constants/services.constants';
import { JwtPayload } from '../interfaces/jwt-payload.interface';

/**
 * Dynamic roles guard.
 *
 * Role names are NOT hardcoded in the app — they live in your DB.
 * The @Roles() decorator just declares what role names are required.
 * AUTH_SERVICE resolves what roles the user actually has for this tenant.
 *
 * This means tenants can create custom roles like:
 *   "League Admin", "Team Captain", "Score Keeper", "Viewer"
 * without any code changes.
 */
@Injectable()
export class RolesGuard implements CanActivate {
  private readonly logger = new Logger('RolesGuard');

  constructor(
    private readonly reflector: Reflector,
    @Inject(AUTH_SERVICE) private readonly authClient: ClientProxy,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // 1. Get required roles from decorator
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!requiredRoles || requiredRoles.length === 0) {
      return true;
    }

    // 2. Get user from request
    const req = context.switchToHttp().getRequest();
    const user: JwtPayload = req.user;

    if (!user) {
      throw new ForbiddenException('User not authenticated');
    }

    const tenantId = req.tenantId || user.tenantId;

    // 3. Fetch user's roles from AUTH_SERVICE (DB lookup)
    const userRoles = await this.getUserRoles(user.sub, tenantId);

    // 4. Check if user has at least one of the required roles
    const hasRole = requiredRoles.some((role) => userRoles.includes(role));

    if (!hasRole) {
      this.logger.warn(
        `User ${user.sub} has roles [${userRoles.join(', ')}] but needs one of [${requiredRoles.join(', ')}]`,
      );
      throw new ForbiddenException(
        `Required role: ${requiredRoles.join(' or ')}`,
      );
    }

    // 5. Attach roles to request
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
            catchError((err) => {
              this.logger.error(
                `Failed to fetch roles for user ${userId}: ${err.message}`,
              );
              throw new ForbiddenException('Unable to verify roles');
            }),
          ),
      );
    } catch (err) {
      if (err instanceof ForbiddenException) throw err;
      throw new ForbiddenException('Unable to verify roles');
    }
  }
}
