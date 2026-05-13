import {
  ForbiddenException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { TenantRepository } from './tenants.repository';
import { CacheService } from '@libs/redis';

const CacheKeys = {
  tenantById: (id: string) => `tenant:${id}`,
  tenantPages: (id: string) => `tenant:${id}:pages`,
  tenantPermissions: (id: string) => `tenant:${id}:permissions`,
};

type PageAccessResponse = {
  allowed: boolean;
  message?: string;
};
@Injectable()
export class TenantService {
  constructor(
    private readonly repo: TenantRepository,
    private readonly usersRepo: UsersRepository,
    private readonly cache: CacheService,

    @Inject('BILLING_SERVICE')
    private readonly billingClient: ClientProxy,

    @Inject('PLATFORM_SERVICE')
    private readonly platformClient: ClientProxy,
  ) {}

  async getAllTenants() {
    return this.repo.getAllTenants();
  }

  async getTenantById(tenantId: string) {
    const key = CacheKeys.tenantById(tenantId);

    const cached = await this.cache.get<unknown>(key);
    if (cached) {
      return cached;
    }

    const tenant = await this.repo.getTenantById(tenantId);
    if (!tenant) {
      throw new NotFoundException('Tenant not found');
    }

    await this.cache.set(key, tenant, 300);
    return tenant;
  }

  async createTenant(dto: CreateTenantDto) {
    try {
      const tenant = await this.repo.createTenant({
        name: dto.name,
        email: dto.email,
        planId: dto.planId,
        phone: dto.phone,
        website: dto.website,
        address: dto.address,
        city: dto.city,
        country: dto.country,
      });

      await this.usersRepo.ensureDefaultRoles(tenant.id);

      const hashedPassword = await bcrypt.hash(dto.password, 10);

      const owner = await this.usersRepo.createUser({
        email: dto.email,
        name: dto.userName,
        password: hashedPassword,
        role: 'OWNER',
        tenantId: tenant.id,
      });

      let billingResponse: unknown = null;
      if (dto.planId) {
        try {
          billingResponse = await firstValueFrom(
            this.billingClient.send(
              { cmd: 'billing.assignPlan' },
              {
                tenantId: tenant.id,
                planId: dto.planId,
                email: dto.email,
                tenantName: dto.name,
              },
            ),
          );
        } catch (error) {
          console.error('Billing service call failed:', error);
        }
      }

      let platformResponse: unknown = null;
      try {
        platformResponse = await firstValueFrom(
          this.platformClient.send(
            { cmd: 'platform.tenant.setupDefaults' },
            {
              tenantId: tenant.id,
              planId: dto.planId,
              tenantName: dto.name,
            },
          ),
        );
      } catch (error) {
        console.error('Platform service call failed:', error);
      }

      await this.cache.del(CacheKeys.tenantById(tenant.id));
      await this.cache.del(CacheKeys.tenantPages(tenant.id));
      await this.cache.del(CacheKeys.tenantPermissions(tenant.id));

      return {
        tenant,
        owner: {
          id: owner.id,
          email: owner.email,
          role: owner.role,
        },
        billing: billingResponse,
        platform: platformResponse,
      };
    } catch (error) {
      console.error('createTenant failed:', error);
      throw error;
    }
  }

  async enablePage(tenantId: string, dto: EnablePageDto) {
    const tenant = await this.repo.getTenantById(tenantId);
    if (!tenant) {
      throw new NotFoundException('Tenant not found');
    }

    if (!tenant.planId) {
      throw new ForbiddenException('Tenant does not have an active plan');
    }

    const pageAccess = await firstValueFrom<PageAccessResponse>(
      this.billingClient.send(
        { cmd: 'billing.pageAccess.check' },
        {
          tenantId,
          planId: tenant.planId,
          pageKey: dto.pageKey,
        },
      ),
    );

    if (!pageAccess.allowed) {
      throw new ForbiddenException(
        pageAccess.message ||
          'Your current plan does not allow this page/module',
      );
    }

    const platformResponse = await firstValueFrom(
      this.platformClient.send(
        { cmd: 'platform.tenant.enablePage' },
        {
          tenantId,
          pageKey: dto.pageKey,
        },
      ),
    );

    await this.cache.del(CacheKeys.tenantPages(tenantId));

    return {
      message: 'Page enabled for tenant',
      data: platformResponse,
    };
  }

  async assignPlanToTenant(tenantId: string, planId: string) {
    const tenant = await this.repo.getTenantById(tenantId);
    if (!tenant) {
      throw new NotFoundException('Tenant not found');
    }

    await this.repo.updateTenantPlan(tenantId, planId);

    const billingResponse = await firstValueFrom(
      this.billingClient.send(
        { cmd: 'billing.assignPlan' },
        {
          tenantId,
          planId,
        },
      ),
    );

    const platformResponse = await firstValueFrom(
      this.platformClient.send(
        { cmd: 'platform.tenant.syncPlanPages' },
        {
          tenantId,
          planId,
        },
      ),
    );

    await this.cache.del(CacheKeys.tenantById(tenantId));
    await this.cache.del(CacheKeys.tenantPages(tenantId));
    await this.cache.del(CacheKeys.tenantPermissions(tenantId));

    return {
      success: true,
      billing: billingResponse,
      platform: platformResponse,
    };
  }
}
