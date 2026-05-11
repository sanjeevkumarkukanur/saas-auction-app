import { Module } from '@nestjs/common';
import { PlayerServiceController } from './player-service.controller';
import { PlayerServiceService } from './player-service.service';

@Module({
  imports: [],
  controllers: [PlayerServiceController],
  providers: [PlayerServiceService],
})
export class PlayerServiceModule {}
