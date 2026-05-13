import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateTeamDto, TeamFilterDto } from '@libs/common';
import { TeamsService } from './team.service';

@Controller()
export class TeamsController {
  constructor(private readonly service: TeamsService) {}

  @MessagePattern('team.create')
  create(@Payload() dto: CreateTeamDto) {
    return this.service.create(dto);
  }

  @MessagePattern('team.findAll')
  findAll(@Payload() query: TeamFilterDto) {
    return this.service.findAll(query);
  }

  @MessagePattern('team.findById')
  findById(@Payload() id: string) {
    return this.service.findOne(id);
  }

  @MessagePattern('team.update')
  update(
    @Payload() payload: { id: string; name?: string; shortName?: string },
  ) {
    const { id, ...dto } = payload;
    return this.service.update(id, dto);
  }

  @MessagePattern('team.delete')
  delete(@Payload() id: string) {
    return this.service.remove(id);
  }
}
