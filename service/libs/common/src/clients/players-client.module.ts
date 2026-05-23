import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SERVICE_PORTS, SERVICES } from '../../../auth/src/config';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SERVICES.PLAYER_SERVICE,
        transport: Transport.TCP,
        options: {
          host: process.env.PLAYER_HOST || 'localhost',
          port: SERVICE_PORTS.PLAYER,
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class PlayersClientModule {}
