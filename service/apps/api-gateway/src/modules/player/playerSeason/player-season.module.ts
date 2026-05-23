import { Module } from '@nestjs/common';
import { PlayerSeasonController } from './player-season.controller';
import { PlayerSeasonProxy } from './player-season.proxy';
import { PlayersClientModule } from '@libs/common';

@Module({
  imports: [PlayersClientModule],
  controllers: [PlayerSeasonController],
  providers: [PlayerSeasonProxy],
})
export class PlayerSeasonModule {}
