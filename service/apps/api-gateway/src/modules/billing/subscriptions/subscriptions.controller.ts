import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { SubscriptionsProxy } from './subscriptions.proxy';
import {
  ChangeSubscriptionStatusDto,
  CreateSubscriptionDto,
  UpdateSubscriptionDto,
} from '@libs/common';

@Controller('subscriptions')
export class SubscriptionsController {
  constructor(private readonly subscriptionsProxy: SubscriptionsProxy) {}

  @Post()
  create(@Body() body: CreateSubscriptionDto) {
    return this.subscriptionsProxy.createSubscription(body);
  }

  @Get()
  findAll() {
    return this.subscriptionsProxy.getAllSubscriptions();
  }

  @Get('tenant/:tenantId')
  findByTenantId(@Param('tenantId') tenantId: string) {
    return this.subscriptionsProxy.getSubscriptionsByTenantId(tenantId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subscriptionsProxy.getSubscriptionById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateSubscriptionDto) {
    return this.subscriptionsProxy.updateSubscription(id, body);
  }

  @Patch(':id/status')
  changeStatus(
    @Param('id') id: string,
    @Body() body: ChangeSubscriptionStatusDto,
  ) {
    return this.subscriptionsProxy.changeSubscriptionStatus(id, body);
  }

  @Patch(':id/cancel')
  cancel(@Param('id') id: string) {
    return this.subscriptionsProxy.cancelSubscription(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subscriptionsProxy.deleteSubscription(id);
  }
}
