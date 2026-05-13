import { Injectable, NotFoundException } from '@nestjs/common';
import { TenantFieldsRepository } from './tenant-fields.repository';
import { CacheService } from '@libs/redis';
import { UpdateTenantFieldDto } from '@libs/common';

const CacheKeys = {
  fieldsByTenantSection: (tenantSectionId: string) =>
    `tenant-section:${tenantSectionId}:fields`,
};

@Injectable()
export class TenantFieldsService {
  constructor(
    private readonly repo: TenantFieldsRepository,
    private readonly cache: CacheService, // 👈 inject cache
  ) {}

  async getBySection(tenantSectionId: string) {
    const key = CacheKeys.fieldsByTenantSection(tenantSectionId);

    // 1️⃣ Try cache
    const cached = await this.cache.get<any[]>(key);
    if (cached) return cached;

    // 2️⃣ DB
    const fields = await this.repo.findBySection(tenantSectionId);

    // 3️⃣ Save to cache (5 minutes)
    await this.cache.set(key, fields, 300);

    return fields;
  }

  async update(id: string, dto: UpdateTenantFieldDto) {
    const field = await this.repo.findById(id);
    if (!field) throw new NotFoundException('Tenant field not found');

    const updated = await this.repo.update(id, dto);

    // ❌ Invalidate cache for this tenant section
    if ((field as any)?.tenantSectionId) {
      await this.cache.del(
        CacheKeys.fieldsByTenantSection((field as any).tenantSectionId),
      );
    }

    return updated;
  }
}
