import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { GameService } from './game.service';
import { CreateGameDto, UpdateGameDto, GameFilterDto } from '@libs/common';

@Controller()
export class GameController {
  constructor(private readonly gameService: GameService) {}

  // ✅ Create Game
  @MessagePattern('game.create')
  create(@Payload() dto: CreateGameDto) {
    return this.gameService.create(dto);
  }

  // ✅ Get All Games
  @MessagePattern('game.findAll')
  findAll(@Payload() filter: GameFilterDto) {
    return this.gameService.findAll(filter || {});
  }

  // ✅ Get Single Game
  @MessagePattern('game.findOne')
  findOne(@Payload() id: string) {
    return this.gameService.findOne(id);
  }

  // ✅ Update Game
  @MessagePattern('game.update')
  update(
    @Payload()
    payload: {
      id: string;
      data: UpdateGameDto;
    },
  ) {
    return this.gameService.update(payload.id, payload.data);
  }
}
