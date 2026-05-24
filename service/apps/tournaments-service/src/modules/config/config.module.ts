import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { ConfigRepository } from './config.repository';
import { ConfigController } from './config.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ConfigService, ConfigRepository],
  controllers: [ConfigController],
  exports: [ConfigService],
})
export class ConfigModule {}
