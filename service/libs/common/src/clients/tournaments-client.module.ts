import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ServicePorts, SERVICES } from '../constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SERVICES.TOURNAMENT_SERVICE,
        transport: Transport.TCP,
        options: {
          host: process.env.TOURNAMENT_HOST || 'localhost',
          port: ServicePorts.TOURNAMENT,
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class TournamentsClientModule {}
