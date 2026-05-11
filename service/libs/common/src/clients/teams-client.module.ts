import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ServicePorts, SERVICES } from '../constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SERVICES.TEAM_SERVICE,
        transport: Transport.TCP,
        options: {
          host: process.env.TEAM_HOST || 'localhost',
          port: ServicePorts.TEAM,
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class TeamsClientModule {}
