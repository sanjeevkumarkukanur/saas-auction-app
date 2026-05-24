import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationsMsController } from './controllers/notifications.ms.controller';
import { NotificationsHttpController } from './controllers/notifications.http.controller';
import { DatabaseModule } from '../database/database.module';
import { ChannelsModule } from '../channels/channels.module';
import { DevicesModule } from '../devices/devices.module';
import { PreferencesModule } from '../preferences/preferences.module';

@Module({
  imports: [DatabaseModule, ChannelsModule, DevicesModule, PreferencesModule],
  providers: [NotificationsService],
  controllers: [NotificationsMsController, NotificationsHttpController],
})
export class NotificationsModule {}
