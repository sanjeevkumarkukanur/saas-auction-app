import { Injectable, NotFoundException } from '@nestjs/common';
import { TenantPagesRepository } from './tenant-pages.repository';
import { CacheService } from '@libs/redis';
import { UpdateTenantPageDto } from '@libs/common';

const CacheKeys = {
  pagesByTenant: (tenantId: string) => `tenant:${tenantId}:pages`,
  tenantPageById: (id: string) => `tenant-page:${id}`,
};

@Injectable()
export class TenantPagesService {
  constructor(
    private readonly repo: TenantPagesRepository,
    private readonly cache: CacheService, // 👈 inject cache
  ) {}

  async getByTenant(tenantId: string) {
    const key = CacheKeys.pagesByTenant(tenantId);

    // 1️⃣ Try cache
    const cached = await this.cache.get<any[]>(key);
    if (cached) return cached;

    // 2️⃣ DB
    const pages = await this.repo.findByTenant(tenantId);

    // 3️⃣ Save to cache (5 minutes)
    await this.cache.set(key, pages, 300);

    return pages;
  }

  async getOne(id: string) {
    const key = CacheKeys.tenantPageById(id);

    // 1️⃣ Try cache
    const cached = await this.cache.get<any>(key);
    if (cached) return cached;

    // 2️⃣ DB
    const page = await this.repo.findById(id);
    if (!page) throw new NotFoundException('Tenant page not found');

    // 3️⃣ Save to cache (5 minutes)
    await this.cache.set(key, page, 300);

    return page;
  }

  async update(id: string, dto: UpdateTenantPageDto) {
    // Find first to know which tenant cache to clear
    const existing = await this.repo.findById(id);
    if (!existing) throw new NotFoundException('Tenant page not found');

    const updated = await this.repo.update(id, dto);

    // ❌ Invalidate caches
    if ((existing as any)?.tenantId) {
      await this.cache.del(CacheKeys.pagesByTenant((existing as any).tenantId));
    }
    await this.cache.del(CacheKeys.tenantPageById(id));

    return updated;
  }
}
