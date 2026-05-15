import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

import { AuthModule } from './auth.module';
import { SERVICE_PORTS } from '@libs/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AuthModule,
    {
      transport: Transport.TCP,
      options: {
        host: process.env.AUTH_SERVICE_HOST || '0.0.0.0',

        port: Number(SERVICE_PORTS.AUTH) || 4000,
      },
    },
  );

  await app.listen();

  console.log(
    `✅ Auth Service running on TCP port ${SERVICE_PORTS.AUTH || 4000}`,
  );
}

bootstrap();
