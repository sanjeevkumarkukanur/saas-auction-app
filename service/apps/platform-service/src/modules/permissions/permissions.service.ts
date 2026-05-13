import { Injectable, ConflictException } from '@nestjs/common';
import { PermissionsRepository } from './permissions.repository';
import { CacheService } from '@libs/redis';
import { CreatePermissionDto } from '@libs/common';
import { Permission } from '@libs/auth';

const CacheKeys = {
  allPermissions: () => `permissions:all`,
};

@Injectable()
export class PermissionsService {
  constructor(
    private readonly repo: PermissionsRepository,
    private readonly cache: CacheService, // 👈 inject cache
  ) {}

  async create(dto: CreatePermissionDto) {
    const existing = await this.repo.findByKey(dto.key);
    if (existing) {
      throw new ConflictException(
        `Permission with key "${dto.key}" already exists`,
      );
    }

    const created = await this.repo.create({
      key: dto.key,
      name: dto.name,
      pageId: dto.pageId, // ✅ REQUIRED
    });

    // ❌ Invalidate permissions cache
    await this.cache.del(CacheKeys.allPermissions());

    return created;
  }

  async findAll(): Promise<Permission[]> {
    const key = CacheKeys.allPermissions();

    // 1️⃣ Try cache
    const cached = await this.cache.get<Permission[]>(key);
    if (cached) return cached;

    // 2️⃣ DB
    const permissions = await this.repo.findAll();

    // 3️⃣ Save to cache (5 minutes)
    await this.cache.set(key, permissions, 300);

    return permissions;
  }
}
