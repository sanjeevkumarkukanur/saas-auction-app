import {
  SERVICES,
  UpdatePlanDto,
  CreatePlanDto,
  UpdatePlanLimitDto,
} from '@libs/common';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class PlansProxy {
  constructor(
    @Inject(SERVICES.BILLING_SERVICE)
    private readonly client: ClientProxy,
  ) {}

  createPlan(dto: CreatePlanDto) {
    return firstValueFrom(this.client.send({ cmd: 'plan.create' }, dto));
  }

  getAllPlans() {
    return firstValueFrom(this.client.send({ cmd: 'plan.findAll' }, {}));
  }

  getPlan(planId: string) {
    return firstValueFrom(
      this.client.send({ cmd: 'plan.findOne' }, { planId }),
    );
  }

  updatePlan(planId: string, dto: UpdatePlanDto) {
    return firstValueFrom(
      this.client.send({ cmd: 'plan.update' }, { planId, dto }),
    );
  }

  updatePlanLimits(planId: string, dto: UpdatePlanLimitDto) {
    return firstValueFrom(
      this.client.send({ cmd: 'plan.updateLimits' }, { planId, dto }),
    );
  }

  assignPermissions(planId: string, permissionIds: string[]) {
    return firstValueFrom(
      this.client.send(
        { cmd: 'plan.assignPermissions' },
        { planId, permissionIds },
      ),
    );
  }
}
