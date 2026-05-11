import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ServicePorts, SERVICES } from '../constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SERVICES.TENANT_SERVICE,
        transport: Transport.TCP,
        options: {
          host: process.env.TENANT_HOST || 'localhost',
          port: ServicePorts.TENANT,
        },
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class TenantsClientModule {}
