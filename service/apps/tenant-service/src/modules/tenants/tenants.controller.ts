import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TenantService } from './tenants.service';
import { CreateTenantDto, EnablePageDto } from '@libs/common';

@Controller()
export class TenantController {
  constructor(private readonly tenantService: TenantService) {
    console.log('🔥 TenantMsController LOADED');
  }

  // Get all tenants - for testing
  @MessagePattern({ cmd: 'tenant.findAll' })
  getAllTenants() {
    console.log('🔥 tenant.findAll received in tenant-service');
    return this.tenantService.getAllTenants();
  }

  // Get tenant by ID - for testing
  @MessagePattern({ cmd: 'tenant.findById' })
  getTenantById(data: { tenantId: string }) {
    console.log('🔥 tenant.findById received in tenant-service', data.tenantId);
    return this.tenantService.getTenantById(data.tenantId);
  }

  // 🔹 Create Tenant
  @MessagePattern({ cmd: 'tenant.create' })
  createTenant(dto: CreateTenantDto) {
    console.log('🔥 tenant.create received in tenant-service');
    return this.tenantService.createTenant(dto);
  }

  // 🔹 Enable Page for Tenant
  @MessagePattern({ cmd: 'tenant.enablePage' })
  enablePage(payload: { tenantId: string; dto: EnablePageDto }) {
    const { tenantId, dto } = payload;
    console.log('🔥 tenant.enablePage received in tenant-service', tenantId);
    return this.tenantService.enablePage(tenantId, dto);
  }
  @MessagePattern({ cmd: 'tenant.assignPlan' })
  assignPlan(@Payload() data: { tenantId: string; planId: string }) {
    return this.tenantService.assignPlanToTenant(data.tenantId, data.planId);
  }
}
