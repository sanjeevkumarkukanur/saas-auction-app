import { Module } from '@nestjs/common';
import { TeamHistoryService } from './team-history.service';
import { TeamHistoryRepository } from './team-history.repository';
import { TeamHistoryController } from './team-history.controller';

@Module({
  controllers: [TeamHistoryController],
  providers: [TeamHistoryService, TeamHistoryRepository],
})
export class TeamHistoryModule {}
