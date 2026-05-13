import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TeamPresenceService } from './team-presence.service';
import { UpdatePresenceDto } from '@libs/common';

@Controller()
export class TeamPresenceController {
  constructor(private readonly service: TeamPresenceService) {}

  @MessagePattern('presence.update')
  update(@Payload() dto: UpdatePresenceDto) {
    return this.service.updatePresence(dto);
  }

  @MessagePattern('presence.offline')
  offline(@Payload() seasonTeamId: string) {
    return this.service.markOffline(seasonTeamId);
  }

  @MessagePattern('presence.findAll')
  findAll(@Payload() filter: any) {
    return this.service.findAll(filter);
  }

  @MessagePattern('presence.findOne')
  findOne(@Payload() seasonTeamId: string) {
    return this.service.findOne(seasonTeamId);
  }
}
