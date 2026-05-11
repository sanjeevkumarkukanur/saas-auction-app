import { NestFactory } from '@nestjs/core';
import { PlayerServiceModule } from './player-service.module';

async function bootstrap() {
  const app = await NestFactory.create(PlayerServiceModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
