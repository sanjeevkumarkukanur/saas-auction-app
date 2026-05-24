import { Module } from '@nestjs/common';
import { TeamStatsService } from './team-stats.service';
import { TeamStatsRepository } from './team-stats.repository';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [TeamStatsService, TeamStatsRepository],
  exports: [TeamStatsService],
})
export class TeamStatsModule {}
