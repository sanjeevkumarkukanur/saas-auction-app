import { Injectable, ConflictException } from '@nestjs/common';
import { PlayerTeamRepository } from './player-team.repository';
import { AssignPlayerTeamDto, UpdatePlayerTeamDto } from '@app/common';

@Injectable()
export class PlayerTeamService {
  constructor(private readonly repo: PlayerTeamRepository) {}

  async assign(dto: AssignPlayerTeamDto) {
    const exists = await this.repo.findByPlayerSeason(dto.playerSeasonId);

    if (exists) {
      throw new ConflictException('Player already assigned to a team');
    }

    return this.repo.create(dto);
  }

  async update(id: string, dto: UpdatePlayerTeamDto) {
    return this.repo.update(id, dto);
  }

  async remove(id: string) {
    return this.repo.delete(id);
  }
}
