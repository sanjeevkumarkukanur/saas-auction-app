import { Module } from '@nestjs/common';
import { StandingsService } from './standings.service';
import { StandingsMsController } from './standings.ms.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { StandingsRepository } from './standings.repository';

@Module({
  imports: [PrismaModule],
  controllers: [StandingsMsController],
  providers: [StandingsService, StandingsRepository],
  exports: [StandingsService],
})
export class StandingsModule {}
