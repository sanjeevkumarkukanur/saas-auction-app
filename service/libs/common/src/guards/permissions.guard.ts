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
import { PERMISSIONS_KEY } from '../decorators/permissions.decorator';
import { AUTH_SERVICE } from '../constants/services.constants';
import { JwtPayload } from '../interfaces/jwt-payload.interface';

/**
 * Dynamic permissions guard.
 *
 * Roles and permissions are NOT hardcoded — they come from your DB via AUTH_SERVICE.
 *
 * Flow:
 *   1. Extract user from request (set by JwtAuthGuard)
 *   2. Read required permissions from @Permissions() decorator
 *   3. Fetch user's actual permissions from AUTH_SERVICE (role → permissions mapping lives in DB)
 *   4. Check if user has ALL required permissions
 *
 * DB schema example:
 *   roles:             { id, name, tenantId }           → e.g. "League Admin"
 *   permissions:       { id, action, resource }         → e.g. "create", "team"
 *   role_permissions:  { roleId, permissionId }         → many-to-many
 *   user_roles:        { userId, roleId, tenantId }     → many-to-many, scoped per tenant
 */
@Injectable()
export class PermissionsGuard implements CanActivate {
  private readonly logger = new Logger('PermissionsGuard');

  constructor(
    private readonly reflector: Reflector,
    @Inject(AUTH_SERVICE) private readonly authClient: ClientProxy,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // 1. Get required permissions from decorator
    const requiredPermissions = this.reflector.getAllAndOverride<string[]>(
      PERMISSIONS_KEY,
      [context.getHandler(), context.getClass()],
    );

    // No @Permissions() decorator → allow access
    if (!requiredPermissions || requiredPermissions.length === 0) {
      return true;
    }

    // 2. Get user from request (set by JwtAuthGuard)
    const req = context.switchToHttp().getRequest();
    const user: JwtPayload = req.user;

    if (!user) {
      throw new ForbiddenException('User not authenticated');
    }

    const tenantId = req.tenantId || user.tenantId;

    // 3. Fetch user's permissions from AUTH_SERVICE
    //    AUTH_SERVICE looks up: user → roles (for this tenant) → permissions
    const userPermissions = await this.getUserPermissions(
      user.sub,
      tenantId,
    );

    // 4. Check if user has ALL required permissions
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

    // 5. Attach permissions to request for downstream use
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
            catchError((err) => {
              this.logger.error(
                `Failed to fetch permissions for user ${userId}: ${err.message}`,
              );
              throw new ForbiddenException('Unable to verify permissions');
            }),
          ),
      );

      return result || [];
    } catch (err) {
      if (err instanceof ForbiddenException) throw err;
      throw new ForbiddenException('Unable to verify permissions');
    }
  }
}
