import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import {
  CreateTeamApprovalDto,
  TeamApprovalFilterDto,
  UpdateTeamApprovalDto,
} from '@libs/common';
import { TeamApprovalService } from './team-approval.service';

@Controller()
export class TeamApprovalController {
  constructor(private readonly service: TeamApprovalService) {}

  @MessagePattern('teamApproval.create')
  create(@Payload() dto: CreateTeamApprovalDto) {
    return this.service.create(dto);
  }

  @MessagePattern('teamApproval.findAll')
  findAll(@Payload() filter: TeamApprovalFilterDto) {
    return this.service.findAll(filter);
  }

  @MessagePattern('teamApproval.findById')
  findById(@Payload() id: string) {
    return this.service.findOne(id);
  }

  @MessagePattern('teamApproval.update')
  update(@Payload() payload: { id: string; dto: UpdateTeamApprovalDto }) {
    return this.service.update(payload.id, payload.dto);
  }

  @MessagePattern('teamApproval.approve')
  approve(@Payload() payload: { id: string; approvedBy: string }) {
    return this.service.approve(payload.id, payload.approvedBy);
  }

  @MessagePattern('teamApproval.reject')
  reject(@Payload() payload: { id: string; comment?: string }) {
    return this.service.reject(payload.id, payload.comment);
  }
}
