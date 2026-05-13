import { Injectable, NotFoundException } from '@nestjs/common';

import { RolesRepository } from './roles.repository';

import { AssignPermissionDto, CreateUserRoleDto } from '@libs/common';
import { CacheService } from '@libs/redis';

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

    // invalidate cache
    if (role?.tenantId) {
      await this.cache.del(CacheKeys.rolesByTenant(role.tenantId));
    }

    return role;
  }

  async assignPermission(roleId: string, dto: AssignPermissionDto) {
    const role = await this.repo.findById(roleId);

    if (!role) {
      throw new NotFoundException('Role not found');
    }

    const result = await this.repo.addPermissionToRole(
      roleId,
      dto.permissionId,
    );

    // invalidate cache
    if (role.tenantId) {
      await this.cache.del(CacheKeys.rolesByTenant(role.tenantId));
    }

    return result;
  }

  async getByTenant(tenantId: string) {
    const key = CacheKeys.rolesByTenant(tenantId);

    // cache
    const cached = await this.cache.get<any[]>(key);

    if (cached) {
      return cached;
    }

    // db
    const roles = await this.repo.getRolesByTenant(tenantId);

    // cache save
    await this.cache.set(key, roles, 300);

    return roles;
  }
}
