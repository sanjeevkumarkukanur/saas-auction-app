import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import {
  CreateTeamOwnerDto,
  TeamOwnerFilterDto,
  UpdateTeamOwnerDto,
} from '@libs/common';
import { TeamOwnerService } from './team-owner.service';

@Controller()
export class TeamOwnerController {
  constructor(private readonly service: TeamOwnerService) {}

  @MessagePattern('teamOwner.create')
  create(@Payload() dto: CreateTeamOwnerDto) {
    return this.service.create(dto);
  }

  @MessagePattern('teamOwner.findAll')
  findAll(@Payload() filter: TeamOwnerFilterDto) {
    return this.service.findAll(filter);
  }

  @MessagePattern('teamOwner.findById')
  findById(@Payload() id: string) {
    return this.service.findOne(id);
  }

  @MessagePattern('teamOwner.update')
  update(@Payload() payload: { id: string; dto: UpdateTeamOwnerDto }) {
    return this.service.update(payload.id, payload.dto);
  }
}
