import { Module } from '@nestjs/common';
import { TeamApprovalService } from './team-approval.service';
import { TeamApprovalRepository } from './team-approval.repository';
import { TeamApprovalController } from './team-approval.controller';

@Module({
  controllers: [TeamApprovalController],
  providers: [TeamApprovalService, TeamApprovalRepository],
})
export class TeamApprovalModule {}
