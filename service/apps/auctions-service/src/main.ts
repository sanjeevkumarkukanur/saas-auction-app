import { NestFactory } from '@nestjs/core';
import { AuctionsServiceModule } from './auctions-service.module';

async function bootstrap() {
  const app = await NestFactory.create(AuctionsServiceModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
