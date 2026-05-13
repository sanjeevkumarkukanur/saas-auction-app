import { Module } from '@nestjs/common';
import { TeamStatController } from './team-stat.controller';
import { TeamStatProxyService } from './team-stat.proxy.service';
import { TeamsClientModule } from '@libs/common/clients/teams-client.module';

@Module({
  imports: [TeamsClientModule],
  controllers: [TeamStatController],
  providers: [TeamStatProxyService],
})
export class TeamStatModule {}
