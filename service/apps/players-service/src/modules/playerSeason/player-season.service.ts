import { Injectable, ConflictException } from '@nestjs/common';
import { PlayerSeasonRepository } from './player-season.repository';
import { CreatePlayerSeasonDto } from '@app/common';

@Injectable()
export class PlayerSeasonService {
  constructor(private readonly repo: PlayerSeasonRepository) {}

  async create(dto: CreatePlayerSeasonDto) {
    const exists = await this.repo.findOne(
      dto.playerId,
      dto.seasonId,
      dto.leagueId,
    );

    if (exists) {
      throw new ConflictException('Player already added to this season');
    }

    return this.repo.create(dto);
  }

  findBySeason(seasonId: string) {
    return this.repo.findBySeason(seasonId);
  }

  async update(id: string, dto: any) {
    return this.repo.update(id, dto);
  }

  async updateStatus(id: string, status: any) {
    return this.repo.update(id, { status });
  }

  async markSold(id: string, soldPrice: number) {
    return this.repo.update(id, {
      soldPrice,
      status: 'SOLD',
    });
  }

  async remove(id: string) {
    return this.repo.delete(id);
  }
}
