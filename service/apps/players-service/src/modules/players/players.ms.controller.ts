import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PlayerService } from './player.service';

import { CreatePlayerDto, FilterPlayerDto } from '@app/common';

@Controller()
export class PlayerMsController {
  constructor(private readonly playerService: PlayerService) {}

  @MessagePattern('player.create')
  create(@Payload() dto: CreatePlayerDto) {
    return this.playerService.create(dto);
  }

  @MessagePattern('player.findAll')
  findAll(@Payload() filter: FilterPlayerDto) {
    return this.playerService.findAll(filter);
  }

  @MessagePattern('player.findOne')
  findOne(@Payload() id: string) {
    return this.playerService.findOne(id);
  }
}
