import { Injectable, NotFoundException } from '@nestjs/common';
import { FieldsRepository } from './fields.repository';
import { CacheService } from '@libs/redis';
import { CreateFieldDto, UpdateFieldDto } from '@libs/common';

const CacheKeys = {
  fieldsBySection: (sectionId: string) => `section:${sectionId}:fields`,
};

@Injectable()
export class FieldsService {
  constructor(
    private readonly repo: FieldsRepository,
    private readonly cache: CacheService,
  ) {}

  async create(dto: CreateFieldDto) {
    const field = this.repo.create(dto);
    // ❌ Invalidate cache for this section (new field added)
    if ((field as any)?.tenantSectionId) {
      await this.cache.del(
        CacheKeys.fieldsBySection((field as any).tenantSectionId),
      );
    }

    return field;
  }

  async findBySection(sectionId: string) {
    const key = CacheKeys.fieldsBySection(sectionId);

    //Try cache
    const cached = await this.cache.get<any[]>(key);

    if (cached) return cached;
    // 2️⃣ DB
    const fields = this.repo.findBySection(sectionId);

    // 3️⃣ Save to cache (5 minutes)
    await this.cache.set(key, fields, 300);

    return fields;
  }

  async update(id: string, dto: UpdateFieldDto) {
    const exists = await this.repo.findById(id);
    if (!exists) throw new NotFoundException('Field not found');

    const updated = await this.repo.update(id, dto);

    // ❌ Invalidate cache for this section (field changed)
    if ((exists as any)?.tenantSectionId) {
      await this.cache.del(
        CacheKeys.fieldsBySection((exists as any).tenantSectionId),
      );
    }

    return updated;
  }

  async remove(id: string) {
    // Find first to know which section cache to clear
    const exists = await this.repo.findById(id);
    if (!exists) throw new NotFoundException('Field not found');

    const result = await this.repo.delete(id);

    // ❌ Invalidate cache for this section (field removed)
    if ((exists as any)?.tenantSectionId) {
      await this.cache.del(
        CacheKeys.fieldsBySection((exists as any).tenantSectionId),
      );
    }

    return result;
  }
}
