import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import {
  ChangeSubscriptionStatusDto,
  CreateSubscriptionDto,
  UpdateSubscriptionDto,
} from '@libs/common';

@Injectable()
export class SubscriptionsProxy {
  constructor(
    @Inject('BILLING_SERVICE') private readonly billingClient: ClientProxy,
  ) {}

  createSubscription(payload: CreateSubscriptionDto) {
    return this.billingClient.send({ cmd: 'create_subscription' }, payload);
  }

  getAllSubscriptions() {
    return this.billingClient.send({ cmd: 'get_all_subscriptions' }, {});
  }

  getSubscriptionById(id: string) {
    return this.billingClient.send({ cmd: 'get_subscription_by_id' }, id);
  }

  getSubscriptionsByTenantId(tenantId: string) {
    return this.billingClient.send(
      { cmd: 'get_subscriptions_by_tenant_id' },
      tenantId,
    );
  }

  updateSubscription(id: string, dto: UpdateSubscriptionDto) {
    return this.billingClient.send({ cmd: 'update_subscription' }, { id, dto });
  }

  changeSubscriptionStatus(id: string, dto: ChangeSubscriptionStatusDto) {
    return this.billingClient.send(
      { cmd: 'change_subscription_status' },
      { id, dto },
    );
  }

  cancelSubscription(id: string) {
    return this.billingClient.send({ cmd: 'cancel_subscription' }, id);
  }

  deleteSubscription(id: string) {
    return this.billingClient.send({ cmd: 'delete_subscription' }, id);
  }
}
