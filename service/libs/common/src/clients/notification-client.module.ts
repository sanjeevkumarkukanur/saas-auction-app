import { Module } from '@nestjs/common';

import { ClientsModule, Transport } from '@nestjs/microservices';

import { SERVICE_CONFIG, SERVICES } from '@libs/common';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SERVICES.AUCTION_SERVICE,

        transport: Transport.TCP,

        options: {
          host: SERVICE_CONFIG.AUCTION_SERVICE.host,

          port: SERVICE_CONFIG.AUCTION_SERVICE.port,
        },
      },
    ]),
  ],

  exports: [ClientsModule],
})
export class AuctionsClientModule {}
