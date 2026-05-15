import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SERVICE_PORTS, SERVICES } from '../constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SERVICES.STATS_SERVICE,
        transport: Transport.TCP,
        options: {
          host: process.env.STATS_HOST || 'localhost',
          port: SERVICE_PORTS.STATS,
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class StatsClientModule {}
