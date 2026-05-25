import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { SendNotificationDto } from '@libs/common';

@Injectable()
export class NotificationProxy {
  constructor(
    @Inject('NOTIFICATION_SERVICE')
    private readonly client: ClientProxy,
  ) {}

  sendNotification(data: SendNotificationDto & { tenantId: string }) {
    return this.client.emit('notification.send', data);
  }

  getByUser(userId: string, tenantId: string) {
    return this.client.send('notification.getByUser', {
      userId,
      tenantId,
    });
  }
}
