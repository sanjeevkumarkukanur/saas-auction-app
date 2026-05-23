import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PlayerStatsService } from './player-stats.service';
import { CreatePlayerStatsDto, UpdatePlayerStatsDto } from '@app/common';

@Controller()
export class PlayerStatsMsController {
  constructor(private readonly service: PlayerStatsService) {}

  @MessagePattern('playerStats.create')
  create(@Payload() dto: CreatePlayerStatsDto) {
    return this.service.create(dto);
  }

  @MessagePattern('playerStats.findByPlayerSeason')
  findByPlayerSeason(@Payload() playerSeasonId: string) {
    return this.service.findByPlayerSeason(playerSeasonId);
  }

  @MessagePattern('playerStats.update')
  update(
    @Payload()
    data: {
      id: string;
      dto: UpdatePlayerStatsDto;
    },
  ) {
    return this.service.update(data.id, data.dto);
  }

  @MessagePattern('playerStats.delete')
  remove(@Payload() id: string) {
    return this.service.remove(id);
  }
}
