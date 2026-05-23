import { Module } from '@nestjs/common';
import { PlayerTeamService } from './player-team.service';
import { PlayerTeamRepository } from './player-team.repository';
import { PlayerTeamController } from './player-team.controller';
import { PlayerTeamMsController } from './player-team.ms.controller';

@Module({
  controllers: [PlayerTeamController, PlayerTeamMsController],
  providers: [PlayerTeamService, PlayerTeamRepository],
  exports: [PlayerTeamService],
})
export class PlayerTeamModule {}
