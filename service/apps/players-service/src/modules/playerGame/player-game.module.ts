import { Module } from '@nestjs/common';
import { PlayerGameService } from './player-game.service';
import { PlayerGameRepository } from './player-game.repository';
import { PlayerGameController } from './player-game.controller';
import { PlayerGameMsController } from './player-game.ms.controller';

@Module({
  controllers: [PlayerGameController, PlayerGameMsController],
  providers: [PlayerGameService, PlayerGameRepository],
  exports: [PlayerGameService],
})
export class PlayerGameModule {}
