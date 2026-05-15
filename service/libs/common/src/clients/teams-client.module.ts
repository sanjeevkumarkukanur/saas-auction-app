import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SERVICE_PORTS, SERVICES } from '../constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SERVICES.TEAM_SERVICE,
        transport: Transport.TCP,
        options: {
          host: process.env.TEAM_HOST || 'localhost',
          port: SERVICE_PORTS.TEAM,
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class TeamsClientModule {}
