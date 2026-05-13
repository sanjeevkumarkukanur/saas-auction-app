import { Module } from '@nestjs/common';
import { TeamApprovalController } from './team-approval.controller';
import { TeamApprovalProxyService } from './team-approval.proxy.service';
import { TeamsClientModule } from '@libs/common/clients/teams-client.module';

@Module({
  imports: [TeamsClientModule],
  controllers: [TeamApprovalController],
  providers: [TeamApprovalProxyService],
})
export class TeamApprovalModule {}
