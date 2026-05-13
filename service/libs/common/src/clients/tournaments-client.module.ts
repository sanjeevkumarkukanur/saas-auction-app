import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SERVICEPORTS, SERVICES } from '../constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SERVICES.TOURNAMENT_SERVICE,
        transport: Transport.TCP,
        options: {
          host: process.env.TOURNAMENT_HOST || 'localhost',
          port: SERVICEPORTS.TOURNAMENT,
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class TournamentsClientModule {}
