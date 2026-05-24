import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { NotificationsService } from '../notifications.service';
import { SendNotificationDto } from '@app/common';

@Controller()
export class NotificationsMsController {
  constructor(private readonly service: NotificationsService) {}

  @EventPattern('notification.send')
  handleSend(@Payload() data: SendNotificationDto) {
    return this.service.send(data);
  }
}
