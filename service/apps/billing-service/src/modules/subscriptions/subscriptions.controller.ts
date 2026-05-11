import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SubscriptionsService } from './subscriptions.service';
import {
  ChangeSubscriptionStatusDto,
  CreateSubscriptionDto,
  UpdateSubscriptionDto,
} from '@libs/common';

@Controller()
export class SubscriptionsController {
  constructor(private readonly subscriptionsService: SubscriptionsService) {}

  @MessagePattern({ cmd: 'create_subscription' })
  create(@Payload() dto: CreateSubscriptionDto) {
    return this.subscriptionsService.create(dto);
  }

  @MessagePattern({ cmd: 'get_all_subscriptions' })
  findAll() {
    return this.subscriptionsService.findAll();
  }

  @MessagePattern({ cmd: 'get_subscription_by_id' })
  findOne(@Payload() id: string) {
    return this.subscriptionsService.findOne(id);
  }

  @MessagePattern({ cmd: 'get_subscriptions_by_tenant_id' })
  findByTenantId(@Payload() tenantId: string) {
    return this.subscriptionsService.findByTenantId(tenantId);
  }

  @MessagePattern({ cmd: 'update_subscription' })
  update(@Payload() payload: { id: string; dto: UpdateSubscriptionDto }) {
    return this.subscriptionsService.update(payload.id, payload.dto);
  }

  @MessagePattern({ cmd: 'change_subscription_status' })
  changeStatus(
    @Payload() payload: { id: string; dto: ChangeSubscriptionStatusDto },
  ) {
    return this.subscriptionsService.changeStatus(payload.id, payload.dto);
  }

  @MessagePattern({ cmd: 'cancel_subscription' })
  cancel(@Payload() id: string) {
    return this.subscriptionsService.cancel(id);
  }

  @MessagePattern({ cmd: 'delete_subscription' })
  remove(@Payload() id: string) {
    return this.subscriptionsService.remove(id);
  }
}
