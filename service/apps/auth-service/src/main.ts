import { NestFactory } from '@nestjs/core';
import { AuthServiceModule } from './auth.module';

async function bootstrap() {
  const app = await NestFactory.create(AuthServiceModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
