// import { Module } from '@nestjs/common';
// import { ClientsModule, Transport } from '@nestjs/microservices';
// import { RealtimeProxy } from './realtime.proxy';

// @Module({
//   imports: [
//     ClientsModule.register([
//       {
//         name: 'REALTIME_SERVICE',
//         transport: Transport.REDIS,
//         options: {
//           host: process.env.REDIS_HOST || 'localhost',
//           port: Number(process.env.REDIS_PORT) || 6379,
//         },
//       },
//     ]),
//   ],
//   providers: [RealtimeProxy],
//   exports: [RealtimeProxy],
// })
// export class RealtimeModule {}

import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RealtimeProxy } from './realtime.proxy';

import { ServicePorts, SERVICES } from '@/config/services.config';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SERVICES.REALTIME_SERVICE,
        transport: Transport.TCP,
        options: {
          host: process.env.REALTIME_HOST || 'localhost',
          port: ServicePorts.REALTIME, // 4009
        },
      },
    ]),
  ],
  providers: [RealtimeProxy],
  exports: [RealtimeProxy],
})
export class RealtimeModule {}
