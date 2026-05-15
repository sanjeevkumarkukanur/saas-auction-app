import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SERVICE_PORTS, SERVICES } from '../constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SERVICES.LEAGUE_SERVICE,
        transport: Transport.TCP,
        options: {
          host: process.env.LEAGUE_HOST || 'localhost',
          port: SERVICE_PORTS.LEAGUE,
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class LeaguesClientModule {}
