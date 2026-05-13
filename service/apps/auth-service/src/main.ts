import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { AuthModule } from './auth.module';
import { SERVICEPORTS } from '@libs/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AuthModule,
    {
      transport: Transport.TCP,
      options: {
        host: process.env.AUTH_SERVICE_HOST || '0.0.0.0',

        port: Number(SERVICEPORTS.AUTH) || 4000,
      },
    },
  );

  await app.listen();

  console.log(
    `✅ Auth Service running on TCP port ${SERVICEPORTS.AUTH || 4000}`,
  );
}

bootstrap();
