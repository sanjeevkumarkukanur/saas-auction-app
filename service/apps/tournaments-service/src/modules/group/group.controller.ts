import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { GroupService } from './group.service';

import { CreateGroupDto, AssignTeamDto } from '@libs/common';
@Controller()
export class GroupMsController {
  constructor(private readonly service: GroupService) {}

  @MessagePattern('group.create')
  create(@Payload() dto: CreateGroupDto) {
    return this.service.create(dto);
  }

  @MessagePattern('group.findByStage')
  findByStage(@Payload() stageId: string) {
    return this.service.findByStage(stageId);
  }

  @MessagePattern('group.addTeam')
  addTeam(@Payload() dto: AssignTeamDto) {
    return this.service.addTeam(dto);
  }
}
