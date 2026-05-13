import { Module } from '@nestjs/common';
import { TeamOwnerController } from './team-owner.controller';
import { TeamOwnerProxyService } from './team-owner.proxy.service';
import { TeamsClientModule } from '@libs/common/clients/teams-client.module';

@Module({
  imports: [TeamsClientModule],
  controllers: [TeamOwnerController],
  providers: [TeamOwnerProxyService],
})
export class TeamOwnerModule {}
