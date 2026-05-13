import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SERVICEPORTS, SERVICES } from '../constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SERVICES.PLAYER_SERVICE,
        transport: Transport.TCP,
        options: {
          host: process.env.PLAYER_HOST || 'localhost',
          port: SERVICEPORTS.PLAYER,
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class PlayersClientModule {}
