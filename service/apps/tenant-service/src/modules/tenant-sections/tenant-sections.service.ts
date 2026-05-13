import { Injectable, NotFoundException } from '@nestjs/common';
import { TenantSectionsRepository } from './tenant-sections.repository';
import { CacheService } from '@libs/redis';
import { UpdateTenantSectionDto } from '@libs/common';

const CacheKeys = {
  sectionsByTenantPage: (tenantPageId: string) =>
    `tenant-page:${tenantPageId}:sections`,
};

@Injectable()
export class TenantSectionsService {
  constructor(
    private readonly repo: TenantSectionsRepository,
    private readonly cache: CacheService, // 👈 inject cache
  ) {}

  async getByPage(tenantPageId: string) {
    const key = CacheKeys.sectionsByTenantPage(tenantPageId);

    // 1️⃣ Try cache
    const cached = await this.cache.get<any[]>(key);
    if (cached) return cached;

    // 2️⃣ DB
    const sections = await this.repo.findByPage(tenantPageId);

    // 3️⃣ Save to cache (5 minutes)
    await this.cache.set(key, sections, 300);

    return sections;
  }

  async update(id: string, dto: UpdateTenantSectionDto) {
    const section = await this.repo.findById(id);
    if (!section) throw new NotFoundException('Tenant section not found');

    const updated = await this.repo.update(id, dto);

    // ❌ Invalidate cache for this tenant page
    if ((section as any)?.tenantPageId) {
      await this.cache.del(
        CacheKeys.sectionsByTenantPage((section as any).tenantPageId),
      );
    }

    return updated;
  }
}
