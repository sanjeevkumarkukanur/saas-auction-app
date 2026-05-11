import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { SubscriptionStatus } from '../../../prisma/generated/billing-client';
import { SubscriptionsRepository } from './subscriptions.repository';
import {
  ChangeSubscriptionStatusDto,
  CreateSubscriptionDto,
  UpdateSubscriptionDto,
} from '@libs/common';

@Injectable()
export class SubscriptionsService {
  constructor(
    private readonly subscriptionsRepository: SubscriptionsRepository,
  ) {}

  async create(dto: CreateSubscriptionDto) {
    const existingActiveSubscription =
      await this.subscriptionsRepository.findActiveByTenantId(dto.tenantId);

    if (existingActiveSubscription) {
      throw new BadRequestException(
        'Tenant already has an active or trialing subscription',
      );
    }

    return this.subscriptionsRepository.create({
      tenantId: dto.tenantId,
      status: dto.status as SubscriptionStatus,
      stripeCustomerId: dto.stripeCustomerId,
      stripeSubId: dto.stripeSubId,
      trialEnd: dto.trialEnd,
      currentPeriodEnd: dto.currentPeriodEnd,
      plan: {
        connect: {
          id: dto.planId,
        },
      },
    });
  }

  async findAll() {
    return this.subscriptionsRepository.findAll();
  }

  async findOne(id: string) {
    const subscription = await this.subscriptionsRepository.findById(id);

    if (!subscription) {
      throw new NotFoundException('Subscription not found');
    }

    return subscription;
  }

  async findByTenantId(tenantId: string) {
    return this.subscriptionsRepository.findByTenantId(tenantId);
  }

  async update(id: string, dto: UpdateSubscriptionDto) {
    await this.findOne(id);

    return this.subscriptionsRepository.update(id, {
      status: dto.status as SubscriptionStatus | undefined,
      stripeCustomerId: dto.stripeCustomerId,
      stripeSubId: dto.stripeSubId,
      trialEnd: dto.trialEnd,
      currentPeriodEnd: dto.currentPeriodEnd,
      ...(dto.planId && {
        plan: {
          connect: { id: dto.planId },
        },
      }),
    });
  }

  async changeStatus(id: string, dto: ChangeSubscriptionStatusDto) {
    await this.findOne(id);

    return this.subscriptionsRepository.updateStatus(
      id,
      dto.status as SubscriptionStatus,
    );
  }

  async cancel(id: string) {
    await this.findOne(id);

    return this.subscriptionsRepository.updateStatus(id, 'canceled');
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.subscriptionsRepository.delete(id);
  }
}
