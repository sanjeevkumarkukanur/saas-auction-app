import { Injectable, ConflictException } from '@nestjs/common';
import { PlayerLeagueRepository } from './player-league.repository';
import { CreatePlayerLeagueDto } from '@app/common';

@Injectable()
export class PlayerLeagueService {
  constructor(private readonly repo: PlayerLeagueRepository) {}

  async create(dto: CreatePlayerLeagueDto) {
    const exists = await this.repo.findOne(dto.playerId, dto.leagueId);

    if (exists) {
      throw new ConflictException('Player already assigned to this league');
    }

    return this.repo.create(dto);
  }

  findByPlayer(playerId: string) {
    return this.repo.findByPlayer(playerId);
  }

  remove(id: string) {
    return this.repo.delete(id);
  }
}
