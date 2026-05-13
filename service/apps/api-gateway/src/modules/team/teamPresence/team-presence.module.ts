import { Module } from '@nestjs/common';
import { TeamPresenceController } from './team-presence.controller';
import { TeamPresenceProxyService } from './team-presence.proxy.service';
import { TeamsClientModule } from '@libs/common/clients/teams-client.module';

@Module({
  imports: [TeamsClientModule],
  controllers: [TeamPresenceController],
  providers: [TeamPresenceProxyService],
})
export class TeamPresenceModule {}
