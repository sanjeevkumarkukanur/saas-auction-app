import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { SERVICEPORTS, SERVICES } from '../constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SERVICES.AUTH_SERVICE,

        transport: Transport.TCP,

        options: {
          host: process.env.AUTH_HOST || 'localhost',
          port: SERVICEPORTS.AUTH,
        },
      },
    ]),
  ],

  exports: [ClientsModule],
})
export class AuthClientModule {}
