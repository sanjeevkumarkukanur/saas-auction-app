import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { SERVICE_PORTS, SERVICES } from '../constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SERVICES.AUTH_SERVICE,

        transport: Transport.TCP,

        options: {
          host: process.env.AUTH_HOST || 'localhost',
          port: SERVICE_PORTS.AUTH,
        },
      },
    ]),
  ],

  exports: [ClientsModule],
})
export class AuthClientModule {}
