import { Module } from '@nestjs/common';
import { TeamHistoryController } from './team-history.controller';
import { TeamHistoryProxyService } from './team-history.proxy.service';
import { TeamsClientModule } from '@libs/common/clients/teams-client.module';

@Module({
  imports: [TeamsClientModule],
  controllers: [TeamHistoryController],
  providers: [TeamHistoryProxyService],
})
export class TeamHistoryModule {}
