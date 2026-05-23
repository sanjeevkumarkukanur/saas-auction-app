import { Module } from '@nestjs/common';
import { PlayerService } from './player.service';
import { PlayerController } from './player.controller';
import { PlayerMsController } from './players.ms.controller';
import { PlayerRepository } from './players.repository';

@Module({
  controllers: [PlayerController, PlayerMsController],
  providers: [PlayerService, PlayerRepository],
  exports: [PlayerService],
})
export class PlayerModule {}
