import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SERVICE_PORTS, SERVICES } from '../constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SERVICES.GAME_SERVICE,
        transport: Transport.TCP,
        options: {
          host: process.env.GAME_HOST || 'localhost',
          port: SERVICE_PORTS.GAME,
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class GamesClientModule {}
