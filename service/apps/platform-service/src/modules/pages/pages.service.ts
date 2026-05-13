import { Injectable, NotFoundException } from '@nestjs/common';
import { PagesRepository } from './pages.repository';
import { CacheService } from '@libs/redis';
import { CreatePageDto, UpdatePageDto } from '@libs/common';

const CacheKeys = {
  allPages: () => `pages:all`,
  pageById: (id: string) => `page:${id}`,
};

@Injectable()
export class PagesService {
  constructor(
    private readonly repo: PagesRepository,
    private readonly cache: CacheService, // 👈 inject cache
  ) {}

  async create(dto: CreatePageDto) {
    const page = await this.repo.create(dto);

    // ❌ Invalidate caches
    await this.cache.del(CacheKeys.allPages());
    if (page?.id) {
      await this.cache.del(CacheKeys.pageById(page.id));
    }

    return page;
  }

  async findAll() {
    const key = CacheKeys.allPages();

    // 1️⃣ Try cache
    const cached = await this.cache.get<any[]>(key);
    if (cached) return cached;

    // 2️⃣ DB
    const pages = await this.repo.findAll();

    // 3️⃣ Save to cache (5 minutes)
    await this.cache.set(key, pages, 300);

    return pages;
  }

  async findOne(id: string) {
    const key = CacheKeys.pageById(id);

    // 1️⃣ Try cache
    const cached = await this.cache.get<any>(key);
    if (cached) return cached;

    // 2️⃣ DB
    const page = await this.repo.findById(id);
    if (!page) throw new NotFoundException('Page not found');

    // 3️⃣ Save to cache (5 minutes)
    await this.cache.set(key, page, 300);

    return page;
  }

  async update(id: string, dto: UpdatePageDto) {
    const existing = await this.repo.findById(id);
    if (!existing) throw new NotFoundException('Page not found');

    const updated = await this.repo.update(id, dto);

    // ❌ Invalidate caches
    await this.cache.del(CacheKeys.allPages());
    await this.cache.del(CacheKeys.pageById(id));

    return updated;
  }

  async remove(id: string) {
    const existing = await this.repo.findById(id);
    if (!existing) throw new NotFoundException('Page not found');

    const result = await this.repo.delete(id);

    // ❌ Invalidate caches
    await this.cache.del(CacheKeys.allPages());
    await this.cache.del(CacheKeys.pageById(id));

    return result;
  }
}
