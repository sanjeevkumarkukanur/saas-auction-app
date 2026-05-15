import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { PlatformServiceModule } from './platform-service.module';
import { SERVICE_PORTS } from '@libs/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    PlatformServiceModule,
    {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0',
        port: SERVICE_PORTS.PLATFORM,
      },
    },
  );

  await app.listen();
  console.log('Platform service running on TCP :4014');
}

bootstrap();
