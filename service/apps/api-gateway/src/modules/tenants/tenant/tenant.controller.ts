import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TenantProxy } from './tenant.proxy';
import { CreateTenantDto, EnablePageDto } from '@libs/common';

@Controller('tenant')
export class TenantController {
  constructor(private readonly tenantProxy: TenantProxy) {}

  @Get()
  getAllTenants() {
    return this.tenantProxy.getAllTenants();
  }

  @Get(':tenantId')
  getTenantById(@Param('tenantId') tenantId: string) {
    return this.tenantProxy.getTenantById(tenantId);
  }

  @Post('register')
  register(@Body() dto: CreateTenantDto) {
    return this.tenantProxy.registerTenant(dto);
  }

  // 🔹 POST /tenant/:tenantId/enable-page
  @Post(':tenantId/enable-page')
  enablePage(@Param('tenantId') tenantId: string, @Body() dto: EnablePageDto) {
    return this.tenantProxy.enablePage(tenantId, dto);
  }
  // ✅ Assign plan to tenant (Super Admin)
  @Post(':tenantId/assign-plan')
  assignPlan(
    @Param('tenantId') tenantId: string,
    @Body() dto: { planId: string },
  ) {
    return this.tenantProxy.assignPlanToTenant(tenantId, dto.planId);
  }
}
