import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SERVICE_PORTS, SERVICES } from '../../../auth/src/config';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SERVICES.BILLING_SERVICE,
        transport: Transport.TCP,
        options: {
          host: process.env.BILLING_HOST || 'localhost',
          port: SERVICE_PORTS.BILLING,
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class BillingClientModule {}
