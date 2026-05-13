import { Controller, Query } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import {
  CreateSeasonTeamDto,
  UpdateSeasonTeamDto,
  SeasonTeamFilterDto,
} from '@libs/common';
import { SeasonTeamService } from './season-team.service';

@Controller()
export class SeasonTeamController {
  constructor(private readonly service: SeasonTeamService) {}

  @MessagePattern('seasonTeam.create')
  create(@Payload() dto: CreateSeasonTeamDto) {
    return this.service.create(dto);
  }

  @MessagePattern('seasonTeam.findAll')
  findAll(@Query() query: SeasonTeamFilterDto) {
    return this.service.findAll(query);
  }

  @MessagePattern('seasonTeam.findById')
  findById(@Payload() id: string) {
    return this.service.findOne(id);
  }

  @MessagePattern('seasonTeam.update')
  update(
    @Payload()
    payload: {
      id: string;
      dto: UpdateSeasonTeamDto;
    },
  ) {
    return this.service.update(payload.id, payload.dto);
  }

  @MessagePattern('seasonTeam.delete')
  delete(@Payload() id: string) {
    return this.service.remove(id);
  }
}
