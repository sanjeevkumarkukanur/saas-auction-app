import { Module } from '@nestjs/common';
import { LeaderboardService } from './leaderboard.service';
import { LeaderboardRepository } from './leaderboard.repository';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [LeaderboardService, LeaderboardRepository],
  exports: [LeaderboardService],
})
export class LeaderboardModule {}
