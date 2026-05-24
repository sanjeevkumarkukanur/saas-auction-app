import { NotificationProxy } from './notification.proxy';
import { Body, Controller, Get, Headers, Param, Post } from '@nestjs/common';
import { SendNotificationDto } from '@app/common';

@Controller('notifications')
export class NotificationController {
  constructor(private readonly proxy: NotificationProxy) {}

  @Post()
  send(
    @Body() body: SendNotificationDto,
    @Headers('x-tenant-id') tenantId: string,
  ) {
    return this.proxy.sendNotification({
      ...body,
      tenantId,
    });
  }

  @Get(':userId')
  get(
    @Param('userId') userId: string,
    @Headers('x-tenant-id') tenantId: string,
  ) {
    return this.proxy.getByUser(userId, tenantId);
  }
}
