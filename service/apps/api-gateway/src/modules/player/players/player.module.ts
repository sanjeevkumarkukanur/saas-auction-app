import { Module } from '@nestjs/common';
import { PlayerController } from './player.controller';
import { PlayerProxy } from './player.proxy';
import { PlayersClientModule } from '@libs/common';

@Module({
  imports: [PlayersClientModule],
  controllers: [PlayerController],
  providers: [PlayerProxy],
})
export class PlayerModule {}
