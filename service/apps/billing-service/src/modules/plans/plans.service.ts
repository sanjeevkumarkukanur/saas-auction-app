import { Injectable, NotFoundException } from '@nestjs/common';
import { PlanRepository } from './plans.repository';
import { CacheService } from '@libs/radius';
import { CreatePlanDto, UpdatePlanDto, UpdatePlanLimitDto } from '@libs/common';

const CacheKeys = {
  allPlans: () => `plans:all`,
  planById: (id: string) => `plan:${id}`,
};

@Injectable()
export class PlanService {
  constructor(
    private readonly repo: PlanRepository,
    private readonly cache: CacheService, // 👈 inject cache
  ) {}

  async createPlan(dto: CreatePlanDto) {
    const created = await this.repo.createPlan(dto);

    // ❌ Invalidate caches
    await this.cache.del(CacheKeys.allPlans());
    if ((created as any)?.id) {
      await this.cache.del(CacheKeys.planById((created as any).id));
    }

    return created;
  }

  async getAllPlans() {
    const key = CacheKeys.allPlans();

    // 1️⃣ Try cache
    const cached = await this.cache.get<any[]>(key);
    if (cached) return cached;

    // 2️⃣ DB
    const plans = await this.repo.getAllPlans();

    // 3️⃣ Save to cache (5 minutes)
    await this.cache.set(key, plans, 300);

    return plans;
  }

  async getPlan(planId: string) {
    const key = CacheKeys.planById(planId);

    // 1️⃣ Try cache
    const cached = await this.cache.get<any>(key);
    if (cached) return cached;

    // 2️⃣ DB
    const plan = await this.repo.getPlanWithDetails(planId);
    if (!plan) throw new NotFoundException('Plan not found');

    // 3️⃣ Save to cache (5 minutes)
    await this.cache.set(key, plan, 300);

    return plan;
  }

  async updatePlan(planId: string, dto: UpdatePlanDto) {
    const updated = await this.repo.updatePlan(planId, dto);

    // ❌ Invalidate caches
    await this.cache.del(CacheKeys.allPlans());
    await this.cache.del(CacheKeys.planById(planId));

    return updated;
  }

  async assignPermissionsToPlan(planId: string, permissionIds: string[]) {
    const result = await this.repo.setPlanPermissions(planId, permissionIds);

    // ❌ Invalidate plan cache (details changed)
    await this.cache.del(CacheKeys.planById(planId));

    return result;
  }

  async updatePlanLimits(planId: string, dto: UpdatePlanLimitDto) {
    const result = await this.repo.updatePlanLimits(planId, dto);

    // ❌ Invalidate plan cache (limits changed)
    await this.cache.del(CacheKeys.planById(planId));

    return result;
  }
}
