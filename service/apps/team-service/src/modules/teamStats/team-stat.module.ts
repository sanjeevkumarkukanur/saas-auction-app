import { Module } from '@nestjs/common';
import { TeamStatService } from './team-stat.service';
import { TeamStatRepository } from './team-stat.repository';
import { TeamStatController } from './team-stat.controller';

@Module({
  controllers: [TeamStatController],
  providers: [TeamStatService, TeamStatRepository],
})
export class TeamStatModule {}
