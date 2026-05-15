import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SERVICE_PORTS, SERVICES } from '../constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SERVICES.AUCTION_SERVICE,
        transport: Transport.TCP,
        options: {
          host: process.env.AUCTION_HOST || 'localhost',
          port: SERVICE_PORTS.AUCTION,
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class AuctionsClientModule {}
