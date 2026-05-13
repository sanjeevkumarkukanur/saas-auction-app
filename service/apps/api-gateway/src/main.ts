import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import helmet from 'helmet';
import compression from 'compression';
import cookieParser from 'cookie-parser';

import { ApiGatewayModule } from './api-gateway.module';
import { RpcExceptionFilter } from '@libs/auth';

async function bootstrap() {
  // Create App
  const app = await NestFactory.create(ApiGatewayModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );
  app.useGlobalFilters(new RpcExceptionFilter());
  // =========================
  // Security Middleware
  // =========================

  app.use(helmet());

  // =========================
  // Compression
  // =========================

  app.use(compression());

  // =========================
  // Cookie Parser
  // =========================

  app.use(cookieParser());

  // =========================
  // CORS
  // =========================

  app.enableCors({
    origin: true,
    credentials: true,
  });

  // =========================
  // Global API Prefix
  // =========================

  app.setGlobalPrefix('api/v1');

  // =========================
  // Validation
  // =========================

  // =========================
  // Swagger
  // =========================

  const config = new DocumentBuilder()
    .setTitle('API Gateway')
    .setDescription('Marketplace Microservices API')
    .setVersion('1.0')

    // JWT Auth
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description: 'Enter JWT access token',
      },
      'JWT',
    )

    // Tenant Header
    .addSecurity('TenantId', {
      type: 'apiKey',
      in: 'header',
      name: 'x-tenant-id',
      description: 'Tenant Identifier',
    })

    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api/docs', app, document);

  // =========================
  // Start Server
  // =========================

  const port = Number(process.env.PORT) || 3000;

  await app.listen(port);

  console.log(`🚀 API Gateway running on port ${port}`);
  console.log(`🌐 API Base URL: http://localhost:${port}/api/v1`);
  console.log(`📚 Swagger Docs: http://localhost:${port}/api/docs`);
}

void bootstrap();
