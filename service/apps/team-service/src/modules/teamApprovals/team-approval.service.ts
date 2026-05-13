import { Injectable, NotFoundException } from '@nestjs/common';
import {
  CreateTeamApprovalDto,
  TeamApprovalFilterDto,
  UpdateTeamApprovalDto,
} from '@libs/common';
import { TeamApprovalRepository } from './team-approval.repository';
import { $Enums } from '@prisma/teams-client';

@Injectable()
export class TeamApprovalService {
  constructor(private readonly repo: TeamApprovalRepository) {}

  create(dto: CreateTeamApprovalDto) {
    return this.repo.create({
      ...dto,
      status: $Enums.TeamApprovalStatus.DRAFT,
    });
  }

  findAll(filter: TeamApprovalFilterDto) {
    return this.repo.findAll(filter);
  }

  async findOne(id: string) {
    const approval = await this.repo.findById(id);
    if (!approval) throw new NotFoundException('Approval not found');
    return approval;
  }

  update(id: string, dto: UpdateTeamApprovalDto) {
    return this.repo.update(id, dto);
  }

  // 🔥 Approve
  approve(id: string, approvedBy: string) {
    return this.repo.update(id, {
      status: $Enums.TeamApprovalStatus.APPROVED,
      approvedBy,
      approvedAt: new Date(),
    });
  }

  // 🔥 Reject
  reject(id: string, comment?: string) {
    return this.repo.update(id, {
      status: $Enums.TeamApprovalStatus.REJECTED,
      comment,
    });
  }
}
