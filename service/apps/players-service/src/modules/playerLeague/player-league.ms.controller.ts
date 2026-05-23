import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PlayerLeagueService } from './player-league.service';
import { CreatePlayerLeagueDto } from '@app/common';

@Controller()
export class PlayerLeagueMsController {
  constructor(private readonly service: PlayerLeagueService) {}

  @MessagePattern('playerLeague.create')
  create(@Payload() dto: CreatePlayerLeagueDto) {
    return this.service.create(dto);
  }

  @MessagePattern('playerLeague.findByPlayer')
  findByPlayer(@Payload() playerId: string) {
    return this.service.findByPlayer(playerId);
  }

  @MessagePattern('playerLeague.delete')
  remove(@Payload() id: string) {
    return this.service.remove(id);
  }
}
