import { SERVICE_CONFIG } from '@libs/common';
import { NestFactory } from '@nestjs/core';

import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { LeaguesServiceModule } from './leagues-service.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    LeaguesServiceModule,
    {
      transport: Transport.TCP,

      options: {
        host: SERVICE_CONFIG.LEAGUE_SERVICE.host,

        port: SERVICE_CONFIG.LEAGUE_SERVICE.port,
      },
    },
  );

  await app.listen();

  console.log(
    `🚀 Organization Service running on ${SERVICE_CONFIG.LEAGUE_SERVICE.port}`,
  );
}

bootstrap();
