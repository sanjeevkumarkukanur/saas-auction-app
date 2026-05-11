import { Injectable, NotFoundException } from '@nestjs/common';
import { RolesRepository } from './roles.repository';
import { CacheService } from '../../../../../libs/redis/src';
import { AssignPermissionDto, CreateUserRoleDto } from '@app/common';

const CacheKeys = {
  rolesByTenant: (tenantId: string) => `tenant:${tenantId}:roles`,
};

@Injectable()
export class RolesService {
  constructor(
    private readonly repo: RolesRepository,
    private readonly cache: CacheService,
  ) {}

  async create(dto: CreateUserRoleDto) {
    const role = await this.repo.createRole(dto);

    // ❌ Invalidate roles cache for this tenant
    if (role?.tenantId) {
      await this.cache.del(CacheKeys.rolesByTenant(role.tenantId));
    }

    return role;
  }

  async assignPermission(roleId: string, dto: AssignPermissionDto) {
    const role = await this.repo.findById(roleId);
    if (!role) throw new NotFoundException('Role not found');

    const result = await this.repo.addPermissionToRole(
      roleId,
      dto.permissionId,
    );

    // ❌ Invalidate roles cache for this tenant (permissions changed)
    if (role.tenantId) {
      await this.cache.del(CacheKeys.rolesByTenant(role.tenantId));
    }

    return result;
  }

  async getByTenant(tenantId: string) {
    const key = CacheKeys.rolesByTenant(tenantId);

    // 1️⃣ Try cache
    const cached = await this.cache.get<any[]>(key);
    if (cached) return cached;

    // 2️⃣ DB
    const roles = await this.repo.getRolesByTenant(tenantId);

    // 3️⃣ Save to cache (5 minutes)
    await this.cache.set(key, roles, 300);

    return roles;
  }
}
