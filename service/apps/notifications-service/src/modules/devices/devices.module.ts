import { Module } from '@nestjs/common';
import { DevicesService } from './devices.service';
import { DevicesHttpController } from './controllers/devices.http.controller';
import { DevicesMsController } from './controllers/devices.ms.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [DevicesService],
  controllers: [DevicesHttpController, DevicesMsController],
  exports: [DevicesService],
})
export class DevicesModule {}
