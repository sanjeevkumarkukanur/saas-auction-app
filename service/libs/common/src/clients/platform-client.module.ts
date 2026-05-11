import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ServicePorts, SERVICES } from '../constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SERVICES.PLATFORM_SERVICE,
        transport: Transport.TCP,
        options: {
          host: process.env.PLATFORM_HOST || 'localhost',
          port: ServicePorts.PLATFORM,
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class PlatformClientModule {}
