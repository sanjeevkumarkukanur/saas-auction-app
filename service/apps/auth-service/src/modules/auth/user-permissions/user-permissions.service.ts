import { Injectable, NotFoundException } from '@nestjs/common';
import { UserPermissionsRepository } from './user-permissions.repository';
import { PrismaService } from 'apps/auth-service/src/prisma/prisma.service';
import { CacheService } from '@libs/radius';
import { SetUserPermissionDto } from '@libs/common';

const CacheKeys = {
  userPermissions: (userId: string) => `user:${userId}:permissions`,
};

@Injectable()
export class UserPermissionsService {
  constructor(
    private readonly repo: UserPermissionsRepository,
    private readonly prisma: PrismaService,
    private readonly cache: CacheService,
  ) {}

  async setPermission(userId: string, dto: SetUserPermissionDto) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const result = await this.repo.upsertUserPermission({
      userId,
      permissionId: dto.permissionId,
      allowed: dto.allowed,
    });

    await this.cache.del(CacheKeys.userPermissions(userId));

    return result;
  }

  async removePermission(userId: string, permissionId: string) {
    const existing = await this.repo.findOne(userId, permissionId);
    if (!existing) {
      throw new NotFoundException('User permission not found');
    }

    const result = await this.repo.deleteUserPermission(userId, permissionId);

    await this.cache.del(CacheKeys.userPermissions(userId));

    return result;
  }

  async getUserPermissions(userId: string) {
    const key = CacheKeys.userPermissions(userId);

    const cached = await this.cache.get<unknown[]>(key);
    if (cached) {
      return cached;
    }

    const permissions = await this.repo.findByUser(userId);

    await this.cache.set(key, permissions, 300);

    return permissions;
  }
}
