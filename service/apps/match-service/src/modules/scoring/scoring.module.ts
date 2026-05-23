import { Module } from '@nestjs/common';
import { ScoringService } from './scoring.service';
import { PrismaModule } from '../prisma/prisma.module';
import { ScoringMsnController } from './scoring.ms.controller';
import { ScoringRepository } from './scoring.repository';

@Module({
  imports: [PrismaModule],
  controllers: [ScoringMsnController],
  providers: [ScoringService, ScoringRepository],
  exports: [ScoringService],
})
export class ScoringModule {}
