import { Injectable, NotFoundException } from '@nestjs/common';
import { SectionsRepository } from './sections.repository';
import { CacheService } from '@libs/redis';
import { CreateSectionDto, UpdateSectionDto } from '@libs/common';

const CacheKeys = {
  sectionsByPage: (pageId: string) => `page:${pageId}:sections`,
};

@Injectable()
export class SectionsService {
  constructor(
    private readonly repo: SectionsRepository,
    private readonly cache: CacheService, // 👈 inject cache
  ) {}

  async create(dto: CreateSectionDto) {
    const section = await this.repo.create(dto);

    // ❌ Invalidate cache for this page
    if ((section as any)?.tenantPageId || (section as any)?.pageId) {
      const pageId = (section as any).tenantPageId ?? (section as any).pageId;
      await this.cache.del(CacheKeys.sectionsByPage(pageId));
    }

    return section;
  }

  async findByPage(pageId: string) {
    const key = CacheKeys.sectionsByPage(pageId);

    // 1️⃣ Try cache
    const cached = await this.cache.get<any[]>(key);
    if (cached) return cached;

    // 2️⃣ DB
    const sections = await this.repo.findByPage(pageId);

    // 3️⃣ Save to cache (5 minutes)
    await this.cache.set(key, sections, 300);

    return sections;
  }

  async update(id: string, dto: UpdateSectionDto) {
    const exists = await this.repo.findById(id);
    if (!exists) throw new NotFoundException('Section not found');

    const updated = await this.repo.update(id, dto);

    // ❌ Invalidate cache for this page
    const pageId = (exists as any).tenantPageId ?? (exists as any).pageId;
    if (pageId) {
      await this.cache.del(CacheKeys.sectionsByPage(pageId));
    }

    return updated;
  }

  async remove(id: string) {
    const exists = await this.repo.findById(id);
    if (!exists) throw new NotFoundException('Section not found');

    const result = await this.repo.delete(id);

    // ❌ Invalidate cache for this page
    const pageId = (exists as any).tenantPageId ?? (exists as any).pageId;
    if (pageId) {
      await this.cache.del(CacheKeys.sectionsByPage(pageId));
    }

    return result;
  }
}
