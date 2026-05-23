import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PlayerGameService } from './player-game.service';
import { CreatePlayerGameDto, UpdatePlayerGameDto } from '@app/common';

@Controller()
export class PlayerGameMsController {
  constructor(private readonly service: PlayerGameService) {}

  @MessagePattern('playerGame.create')
  create(@Payload() dto: CreatePlayerGameDto) {
    return this.service.create(dto);
  }

  @MessagePattern('playerGame.findByPlayer')
  findByPlayer(@Payload() playerId: string) {
    return this.service.findByPlayer(playerId);
  }

  @MessagePattern('playerGame.update')
  update(
    @Payload()
    data: {
      id: string;
      dto: UpdatePlayerGameDto;
    },
  ) {
    return this.service.update(data.id, data.dto);
  }
  @MessagePattern('playerGame.delete')
  remove(@Payload() id: string) {
    return this.service.remove(id);
  }
}
