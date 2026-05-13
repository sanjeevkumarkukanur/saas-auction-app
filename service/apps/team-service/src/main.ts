import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { TeamServiceModule } from './team-service.module';

async function bootstrap() {
  const logger = new Logger('TeamServiceBootstrap');

  const httpPort = Number(process.env.TEAM_HTTP_PORT) || 5003;
  const tcpPort = Number(process.env.TEAM_TCP_PORT) || 4003;
  const host = process.env.TEAM_HOST || '0.0.0.0';

  const app = await NestFactory.create(TeamServiceModule);
  // ✅ TCP microservice
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      host: 'localhost',
      port: tcpPort,
    },
    inheritAppConfig: true,
  });

  // ✅ Swagger
  const config = new DocumentBuilder()
    .setTitle('Team Service')
    .setDescription('Auction SaaS Team Microservice API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  // ✅ Start services
  await app.startAllMicroservices();
  await app.listen(httpPort);

  logger.log(`🚀 HTTP running on http://${host}:${httpPort}`);
  logger.log(`📘 Swagger running on http://${host}:${httpPort}/docs`);
  logger.log(`🔌 TCP Microservice running on ${host}:${tcpPort}`);
}

bootstrap();
