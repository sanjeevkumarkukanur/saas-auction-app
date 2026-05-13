import { Injectable } from '@nestjs/common';
import { TeamPresenceRepository } from './team-presence.repository';
import { UpdatePresenceDto } from '@libs/common';

@Injectable()
export class TeamPresenceService {
  constructor(private readonly repo: TeamPresenceRepository) {}

  async updatePresence(dto: UpdatePresenceDto) {
    return this.repo.upsert({
      tenantId: dto.seasonTeamId, // adjust if needed
      seasonTeamId: dto.seasonTeamId,
      isOnline: dto.isOnline,
      socketId: dto.socketId,
      lastSeenAt: new Date(),
    });
  }

  async markOffline(seasonTeamId: string) {
    return this.repo.upsert({
      tenantId: seasonTeamId,
      seasonTeamId,
      isOnline: false,
      socketId: null,
      lastSeenAt: new Date(),
    });
  }

  findAll(filter: any) {
    return this.repo.findAll(filter);
  }

  findOne(seasonTeamId: string) {
    return this.repo.findBySeasonTeamId(seasonTeamId);
  }
}
