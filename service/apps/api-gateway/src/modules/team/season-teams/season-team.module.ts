import { Module } from '@nestjs/common';
import { SeasonTeamController } from './season-team.controller';
import { SeasonTeamProxyService } from './season-team.proxy.service';
import { TeamsClientModule } from '@libs/common/clients/teams-client.module';

@Module({
  imports: [TeamsClientModule],
  controllers: [SeasonTeamController],
  providers: [SeasonTeamProxyService],
})
export class SeasonTeamModule {}
