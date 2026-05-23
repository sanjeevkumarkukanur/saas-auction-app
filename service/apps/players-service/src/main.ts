import { SERVICE_CONFIG } from '@libs/common';
import { NestFactory } from '@nestjs/core';

import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { PlayersServiceModule } from './players-service.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    PlayersServiceModule,
    {
      transport: Transport.TCP,

      options: {
        host: SERVICE_CONFIG.PLAYER_SERVICE.host,

        port: SERVICE_CONFIG.PLAYER_SERVICE.port,
      },
    },
  );

  await app.listen();

  console.log(
    `🚀 Organization Service running on ${SERVICE_CONFIG.PLAYER_SERVICE.port}`,
  );
}

bootstrap();
