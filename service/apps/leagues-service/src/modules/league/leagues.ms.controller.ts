import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { LeaguesService } from './league.service';
import { CreateLeagueDto, LeagueFilterDto, UpdateLeagueDto } from '@app/common';

@Controller()
export class LeaguesMsController {
  constructor(private readonly service: LeaguesService) {}

  @MessagePattern('league.create')
  create(@Payload() dto: CreateLeagueDto) {
    return this.service.create(dto);
  }

  @MessagePattern('league.findAll')
  findAll(@Payload() filter: LeagueFilterDto) {
    return this.service.findAll(filter);
  }

  @MessagePattern('league.findOne')
  findOne(@Payload() id: string) {
    return this.service.findOne(id);
  }

  @MessagePattern('league.update')
  update(
    @Payload()
    data: {
      id: string;
      dto: UpdateLeagueDto;
    },
  ) {
    return this.service.update(data.id, data.dto);
  }

  @MessagePattern('league.delete')
  remove(@Payload() id: string) {
    return this.service.remove(id);
  }
}
