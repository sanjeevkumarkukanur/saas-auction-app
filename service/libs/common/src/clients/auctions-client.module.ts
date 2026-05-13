import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SERVICEPORTS, SERVICES } from '../constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SERVICES.AUCTION_SERVICE,
        transport: Transport.TCP,
        options: {
          host: process.env.AUCTION_HOST || 'localhost',
          port: SERVICEPORTS.AUCTION,
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class AuctionsClientModule {}
