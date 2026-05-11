import { NestFactory } from '@nestjs/core';
import { TeamServiceModule } from './team-service.module';

async function bootstrap() {
  const app = await NestFactory.create(TeamServiceModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
