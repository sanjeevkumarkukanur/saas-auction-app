import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ServicePorts, SERVICES } from '../constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SERVICES.PLAYER_SERVICE,
        transport: Transport.TCP,
        options: {
          host: process.env.PLAYER_HOST || 'localhost',
          port: ServicePorts.PLAYER,
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class PlayersClientModule {}
