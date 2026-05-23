import { SERVICE_CONFIG } from '@libs/common';
import { NestFactory } from '@nestjs/core';

import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { MatchServiceModule } from './match-service.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MatchServiceModule,
    {
      transport: Transport.TCP,

      options: {
        host: SERVICE_CONFIG.MATCH_SERVICE.host,

        port: SERVICE_CONFIG.MATCH_SERVICE.port,
      },
    },
  );

  await app.listen();

  console.log(
    `🚀 Organization Service running on ${SERVICE_CONFIG.MATCH_SERVICE.port}`,
  );
}

bootstrap();
