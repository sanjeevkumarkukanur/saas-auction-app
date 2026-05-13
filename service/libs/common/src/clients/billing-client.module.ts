import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SERVICEPORTS, SERVICES } from '../constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SERVICES.BILLING_SERVICE,
        transport: Transport.TCP,
        options: {
          host: process.env.BILLING_HOST || 'localhost',
          port: SERVICEPORTS.BILLING,
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class BillingClientModule {}
