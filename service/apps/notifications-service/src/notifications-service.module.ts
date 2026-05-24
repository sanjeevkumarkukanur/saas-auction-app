import { RedisModule } from '@libs/redis';
import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database/database.module';
import { ChannelsModule } from './modules/channels/channels.module';
import { DevicesModule } from './modules/devices/devices.module';
import { PreferencesModule } from './modules/preferences/preferences.module';
import { NotificationsModule } from './modules/notifications/notifications.module';

@Module({
  imports: [
    RedisModule,
    DatabaseModule,
    ChannelsModule,
    DevicesModule,
    PreferencesModule,
    NotificationsModule,
  ],
})
export class NotificationsServiceModule {}
