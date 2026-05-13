import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SERVICEPORTS, SERVICES } from '../constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SERVICES.PLATFORM_SERVICE,
        transport: Transport.TCP,
        options: {
          host: process.env.PLATFORM_HOST || 'localhost',
          port: SERVICEPORTS.PLATFORM,
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class PlatformClientModule {}
