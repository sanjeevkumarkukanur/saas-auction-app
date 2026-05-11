import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ForbiddenException,
} from '@nestjs/common';

@Injectable()
export class TenantGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();

    // tenantId comes from TenantMiddleware (JWT) or x-tenant-id header
    const tenantId = req.tenantId || req.headers['x-tenant-id'];

    if (!tenantId) {
      throw new ForbiddenException('Tenant ID is required');
    }

    // Attach to request for downstream use
    req.tenantId = tenantId;
    req.tenant = { id: tenantId };

    return true;
  }
}
