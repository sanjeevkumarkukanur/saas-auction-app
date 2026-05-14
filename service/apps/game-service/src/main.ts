import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { SERVICEPORTS } from '@libs/common';
import { GameServiceModule } from './game-service.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    GameServiceModule,
    {
      transport: Transport.TCP,
      options: {
        host: process.env.AUTH_SERVICE_HOST || '0.0.0.0',

        port: Number(SERVICEPORTS.GAME) || 4000,
      },
    },
  );
  await app.listen();
  console.log(
    `✅ Game Service running on TCP port ${SERVICEPORTS.GAME || 4000}`,
  );
}

bootstrap();
