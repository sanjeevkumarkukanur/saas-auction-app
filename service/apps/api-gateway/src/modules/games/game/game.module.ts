import { Module } from '@nestjs/common';
import { GameController } from './game.controller';
import { GameProxy } from './game.proxy';
import { GamesClientModule } from '@libs/common';

@Module({
  imports: [GamesClientModule],
  controllers: [GameController],
  providers: [GameProxy],
})
export class GameModule {}
