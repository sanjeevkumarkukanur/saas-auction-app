import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ForbiddenException,
} from '@nestjs/common';
import { Request } from 'express';
import { TenantContext } from '../interfaces/tenant-context.interface';

interface TenantRequest extends Request {
  tenantId?: string;
  tenant?: TenantContext;
}

@Injectable()
export class TenantGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest<TenantRequest>();

    const tenantId = req.tenantId ?? req.headers['x-tenant-id'];

    if (!tenantId || typeof tenantId !== 'string') {
      throw new ForbiddenException('Tenant ID is required');
    }

    req.tenantId = tenantId;
    req.tenant = { id: tenantId };

    return true;
  }
}
