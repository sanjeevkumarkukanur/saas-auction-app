import { Injectable, ConflictException } from '@nestjs/common';
import { PlayerStatsRepository } from './player-stats.repository';
import { CreatePlayerStatsDto, UpdatePlayerStatsDto } from '@app/common';

@Injectable()
export class PlayerStatsService {
  constructor(private readonly repo: PlayerStatsRepository) {}

  async create(dto: CreatePlayerStatsDto) {
    const exists = await this.repo.findOne(dto.playerSeasonId, dto.gameId);

    if (exists) {
      throw new ConflictException('Stats already exist for this player + game');
    }

    return this.repo.create(dto);
  }

  findByPlayerSeason(playerSeasonId: string) {
    return this.repo.findByPlayerSeason(playerSeasonId);
  }

  async update(id: string, dto: UpdatePlayerStatsDto) {
    return this.repo.update(id, dto);
  }

  async remove(id: string) {
    return this.repo.delete(id);
  }
}
