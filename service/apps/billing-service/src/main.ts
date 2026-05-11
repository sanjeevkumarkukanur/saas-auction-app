import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { BillingModule } from './billing.module';

async function bootstrap() {
  const app = await NestFactory.create(BillingModule);

  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      host: 'localhost',
      port: 4007,
    },
  });

  await app.startAllMicroservices();
  await app.listen(5007);
}
bootstrap();
