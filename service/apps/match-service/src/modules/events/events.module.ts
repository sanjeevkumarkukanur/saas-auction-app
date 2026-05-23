import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { EventPublisher } from './event.publisher';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'TOURNAMENT_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 4001,
        },
      },
      {
        name: 'STANDINGS_SERVICE',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 4005,
        },
      },
    ]),
  ],
  providers: [EventPublisher],
  exports: [EventPublisher],
})
export class EventsModule {}
