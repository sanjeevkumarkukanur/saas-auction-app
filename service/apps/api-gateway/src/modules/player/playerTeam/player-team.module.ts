import { Module } from '@nestjs/common';
import { PlayerTeamController } from './player-team.controller';
import { PlayerTeamProxy } from './player-team.proxy';
import { PlayersClientModule } from '@libs/common';

@Module({
  imports: [PlayersClientModule],
  controllers: [PlayerTeamController],
  providers: [PlayerTeamProxy],
})
export class PlayerTeamModule {}
