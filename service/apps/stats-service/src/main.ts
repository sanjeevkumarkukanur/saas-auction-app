import { NestFactory } from '@nestjs/core';
import { StatsServiceModule } from './stats-service.module';

async function bootstrap() {
  const app = await NestFactory.create(StatsServiceModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
