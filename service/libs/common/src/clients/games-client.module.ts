import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ServicePorts, SERVICES } from '../constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SERVICES.GAME_SERVICE,
        transport: Transport.TCP,
        options: {
          host: process.env.GAME_HOST || 'localhost',
          port: ServicePorts.GAME,
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class GamesClientModule {}
