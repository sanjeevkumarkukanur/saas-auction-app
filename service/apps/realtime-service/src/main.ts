import { NestFactory } from '@nestjs/core';
import { RealtimeServiceModule } from './realtime-service.module';

async function bootstrap() {
  const app = await NestFactory.create(RealtimeServiceModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
