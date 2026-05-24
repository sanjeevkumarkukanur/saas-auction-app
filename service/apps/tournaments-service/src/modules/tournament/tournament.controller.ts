import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TournamentService } from './tournament.service';
import { CreateTournamentDto, UpdateTournamentDto } from '@libs/common';

@Controller()
export class TournamentController {
  constructor(private readonly service: TournamentService) {}

  @MessagePattern('tournament.create')
  create(@Payload() dto: CreateTournamentDto) {
    return this.service.create(dto);
  }

  @MessagePattern('tournament.findAll')
  findAll() {
    return this.service.findAll();
  }

  @MessagePattern('tournament.findOne')
  findOne(@Payload() id: string) {
    return this.service.findOne(id);
  }

  @MessagePattern('tournament.update')
  update(
    @Payload()
    data: {
      id: string;
      dto: UpdateTournamentDto;
    },
  ) {
    return this.service.update(data.id, data.dto);
  }

  @MessagePattern('tournament.delete')
  remove(@Payload() id: string) {
    return this.service.remove(id);
  }
}
