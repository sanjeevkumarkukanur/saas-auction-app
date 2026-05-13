import { Module } from '@nestjs/common';
import { SeasonTeamService } from './season-team.service';
import { SeasonTeamRepository } from './season-team.repository';
import { SeasonTeamController } from './season-team.controller';

@Module({
  controllers: [SeasonTeamController],
  providers: [SeasonTeamService, SeasonTeamRepository],
})
export class SeasonTeamModule {}
