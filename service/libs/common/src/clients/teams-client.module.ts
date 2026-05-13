import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SERVICEPORTS, SERVICES } from '../constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SERVICES.TEAM_SERVICE,
        transport: Transport.TCP,
        options: {
          host: process.env.TEAM_HOST || 'localhost',
          port: SERVICEPORTS.TEAM,
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class TeamsClientModule {}
