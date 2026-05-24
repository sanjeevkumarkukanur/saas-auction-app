import { Module } from '@nestjs/common';
import { StageService } from './stage.service';
import { StageRepository } from './stage.repository';
import { StageController } from './stage.controller';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  controllers: [StageController],
  providers: [StageService, StageRepository, PrismaModule],
  exports: [StageService],
})
export class StageModule {}
