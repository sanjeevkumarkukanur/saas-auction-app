import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ServicePorts, SERVICES } from '../constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SERVICES.BILLING_SERVICE,
        transport: Transport.TCP,
        options: {
          host: process.env.BILLING_HOST || 'localhost',
          port: ServicePorts.BILLING,
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class BillingClientModule {}
