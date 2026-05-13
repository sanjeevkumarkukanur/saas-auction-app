import { CreateTenantDto, EnablePageDto, SERVICES } from '@libs/common';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class TenantProxy {
  constructor(
    @Inject(SERVICES.TENANT_SERVICE)
    private readonly tenantClient: ClientProxy,
  ) {}

  async getAllTenants() {
    return firstValueFrom(
      this.tenantClient.send({ cmd: 'tenant.findAll' }, {}),
    );
  }

  async getTenantById(tenantId: string) {
    return firstValueFrom(
      this.tenantClient.send({ cmd: 'tenant.findById' }, { tenantId }),
    );
  }

  async registerTenant(dto: CreateTenantDto) {
    const tenant = await firstValueFrom(
      this.tenantClient.send({ cmd: 'tenant.create' }, dto),
    );

    return {
      success: true,
      data: tenant,
      message: 'Tenant registered successfully',
    };
  }

  async enablePage(tenantId: string, dto: EnablePageDto) {
    return firstValueFrom(
      this.tenantClient.send({ cmd: 'tenant.enablePage' }, { tenantId, dto }),
    );
  }

  async assignPlanToTenant(tenantId: string, planId: string) {
    return firstValueFrom(
      this.tenantClient.send(
        { cmd: 'tenant.assignPlan' },
        { tenantId, planId },
      ),
    );
  }
}
