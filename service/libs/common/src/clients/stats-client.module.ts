import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SERVICEPORTS, SERVICES } from '../constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SERVICES.STATS_SERVICE,
        transport: Transport.TCP,
        options: {
          host: process.env.STATS_HOST || 'localhost',
          port: SERVICEPORTS.STATS,
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class StatsClientModule {}
