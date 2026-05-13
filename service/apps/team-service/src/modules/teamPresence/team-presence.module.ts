import { Module } from '@nestjs/common';
import { TeamPresenceService } from './team-presence.service';
import { TeamPresenceRepository } from './team-presence.repository';
import { TeamPresenceController } from './team-presence.controller';

@Module({
  controllers: [TeamPresenceController],
  providers: [TeamPresenceService, TeamPresenceRepository],
})
export class TeamPresenceModule {}
