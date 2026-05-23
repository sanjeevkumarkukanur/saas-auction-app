import { Module } from '@nestjs/common';
import { PlayerGameController } from './player-game.controller';
import { PlayerGameProxy } from './player-game.proxy';
import { PlayersClientModule } from '@libs/common';

@Module({
  imports: [PlayersClientModule],
  controllers: [PlayerGameController],
  providers: [PlayerGameProxy],
})
export class PlayerGameModule {}
