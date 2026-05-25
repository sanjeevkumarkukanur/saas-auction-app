import { Module } from '@nestjs/common';

import { ClientsModule, Transport } from '@nestjs/microservices';

import { SERVICE_QUEUES, SERVICES } from '@libs/common';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SERVICES.REALTIME_SERVICE,

        transport: Transport.RMQ,

        options: {
          urls: [process.env.RABBITMQ_URL || 'amqp://localhost:5672'],

          queue: SERVICE_QUEUES.REALTIME_SERVICE.queue,

          queueOptions: {
            durable: true,
          },
        },
      },
    ]),
  ],

  exports: [ClientsModule],
})
export class RealtimeClientModule {}
