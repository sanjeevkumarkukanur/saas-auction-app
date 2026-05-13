import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SERVICEPORTS, SERVICES } from '../constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SERVICES.MATCH_SERVICE,
        transport: Transport.TCP,
        options: {
          host: process.env.MATCH_HOST || 'localhost',
          port: SERVICEPORTS.MATCH,
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class MatchClientModule {}
