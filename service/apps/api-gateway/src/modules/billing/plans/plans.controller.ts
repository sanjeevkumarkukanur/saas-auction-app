// apps/api-gateway/src/plans/plans.controller.ts
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PlansProxy } from './plans.proxy';
import {
  AssignPlanPermissionsDto,
  CreatePlanDto,
  UpdatePlanDto,
  UpdatePlanLimitDto,
} from '@libs/common';

@ApiTags('Master Plans')
// @UseGuards(JwtGuard, SuperAdminGuard) // 🔒 Only Super Admin
@Controller('plans')
export class PlansController {
  constructor(private readonly plansProxy: PlansProxy) {}

  @Post()
  create(@Body() dto: CreatePlanDto) {
    return this.plansProxy.createPlan(dto);
  }

  @Get()
  getAll() {
    return this.plansProxy.getAllPlans();
  }

  @Get(':planId')
  getOne(@Param('planId') planId: string) {
    return this.plansProxy.getPlan(planId);
  }

  @Patch(':planId')
  update(@Param('planId') planId: string, @Body() dto: UpdatePlanDto) {
    return this.plansProxy.updatePlan(planId, dto);
  }

  @Patch(':planId/limits')
  updateLimits(
    @Param('planId') planId: string,
    @Body() dto: UpdatePlanLimitDto,
  ) {
    return this.plansProxy.updatePlanLimits(planId, dto);
  }

  @Post(':planId/permissions')
  assignPermissions(
    @Param('planId') planId: string,
    @Body() dto: AssignPlanPermissionsDto,
  ) {
    return this.plansProxy.assignPermissions(planId, dto.permissionIds);
  }
}
