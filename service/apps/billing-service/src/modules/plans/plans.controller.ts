import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PlanService } from './plans.service';
import { CreatePlanDto, UpdatePlanDto, UpdatePlanLimitDto } from '@libs/common';

@Controller()
export class PlanController {
  constructor(private readonly planService: PlanService) {}

  @MessagePattern({ cmd: 'plan.create' })
  create(@Payload() dto: CreatePlanDto) {
    return this.planService.createPlan(dto);
  }

  @MessagePattern({ cmd: 'plan.findAll' })
  findAll() {
    return this.planService.getAllPlans();
  }

  @MessagePattern({ cmd: 'plan.findOne' })
  findOne(@Payload() data: { planId: string }) {
    return this.planService.getPlan(data.planId);
  }

  @MessagePattern({ cmd: 'plan.update' })
  update(@Payload() data: { planId: string; dto: UpdatePlanDto }) {
    return this.planService.updatePlan(data.planId, data.dto);
  }

  @MessagePattern({ cmd: 'plan.updateLimits' })
  updateLimits(@Payload() data: { planId: string; dto: UpdatePlanLimitDto }) {
    return this.planService.updatePlanLimits(data.planId, data.dto);
  }

  @MessagePattern({ cmd: 'plan.assignPermissions' })
  assignPermissions(
    @Payload() data: { planId: string; permissionIds: string[] },
  ) {
    return this.planService.assignPermissionsToPlan(
      data.planId,
      data.permissionIds,
    );
  }
}
