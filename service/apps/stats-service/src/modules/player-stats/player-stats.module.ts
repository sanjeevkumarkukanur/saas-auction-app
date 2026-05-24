import { Module } from '@nestjs/common';
import { PlayerStatsService } from './player-stats.service';
import { PlayerStatsRepository } from './player-stats.repository';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [PlayerStatsService, PlayerStatsRepository],
  exports: [PlayerStatsService],
})
export class PlayerStatsModule {}
