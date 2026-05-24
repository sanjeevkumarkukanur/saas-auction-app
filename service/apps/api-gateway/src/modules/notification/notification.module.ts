import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationProxy } from './notification.proxy';
import { NotificationsClientModule } from '@libs/common/clients/notification-client.module';

@Module({
  imports: [NotificationsClientModule],
  controllers: [NotificationController],
  providers: [NotificationProxy],
})
export class NotificationModule {}
