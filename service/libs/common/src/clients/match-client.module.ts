import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SERVICE_PORTS, SERVICES } from '../constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SERVICES.MATCH_SERVICE,
        transport: Transport.TCP,
        options: {
          host: process.env.MATCH_HOST || 'localhost',
          port: SERVICE_PORTS.MATCH,
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class MatchClientModule {}
