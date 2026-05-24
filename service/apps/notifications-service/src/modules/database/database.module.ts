import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { NotificationsRepository } from './repositories/notifications.repository';
import { DevicesRepository } from './repositories/devices.repository';
import { PreferencesRepository } from './repositories/preferences.repository';

@Module({
  providers: [
    PrismaService,
    NotificationsRepository,
    DevicesRepository,
    PreferencesRepository,
  ],
  exports: [
    PrismaService,
    NotificationsRepository,
    DevicesRepository,
    PreferencesRepository,
  ],
})
export class DatabaseModule {}
