import { Module } from '@nestjs/common';
import { TeamController } from './team.controller';
import { TeamProxyService } from './team.proxy';
import { TeamsClientModule } from '@libs/common/clients/teams-client.module';

@Module({
  imports: [TeamsClientModule],
  controllers: [TeamController],
  providers: [TeamProxyService],
})
export class TeamModule {}
