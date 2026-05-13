import { Injectable, Logger } from '@nestjs/common';
import { RedisService } from './redis.service';

@Injectable()
export class CacheService {
  private readonly logger = new Logger(CacheService.name);

  constructor(private readonly redis: RedisService) {}

  /**
   * Get a value from cache and parse JSON.
   */
  async get<T>(key: string): Promise<T | null> {
    try {
      const val = await this.redis.getRaw(key);
      if (!val) return null;
      return JSON.parse(val) as T;
    } catch (err) {
      this.logger.error(`Cache get error for key=${key}`, err as any);
      return null; // fail open
    }
  }

  /**
   * Set a value in cache with optional TTL (seconds).
   */
  async set(key: string, value: any, ttlSeconds = 300): Promise<void> {
    try {
      const payload = JSON.stringify(value);
      if (ttlSeconds && ttlSeconds > 0) {
        await this.redis.setRaw(key, payload, ttlSeconds);
      } else {
        await this.redis.setRaw(key, payload);
      }
    } catch (err) {
      this.logger.error(`Cache set error for key=${key}`, err as any);
    }
  }

  /**
   * Delete a cache key.
   */
  async del(key: string): Promise<void> {
    try {
      await this.redis.delRaw(key);
    } catch (err) {
      this.logger.error(`Cache del error for key=${key}`, err as any);
    }
  }

  /**
   * Delete multiple keys.
   */
  async delMany(keys: string[]): Promise<void> {
    if (!keys?.length) return;
    await Promise.all(keys.map((k) => this.del(k)));
  }
}
