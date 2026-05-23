import { Injectable, ConflictException } from '@nestjs/common';
import { PlayerGameRepository } from './player-game.repository';
import { CreatePlayerGameDto, UpdatePlayerGameDto } from '@app/common';

@Injectable()
export class PlayerGameService {
  constructor(private readonly repo: PlayerGameRepository) {}

  async create(dto: CreatePlayerGameDto) {
    const exists = await this.repo.findOne(dto.playerId, dto.gameId);

    if (exists) {
      throw new ConflictException('Player already assigned to this game');
    }

    return this.repo.create(dto);
  }

  findByPlayer(playerId: string) {
    return this.repo.findByPlayer(playerId);
  }

  async update(id: string, dto: UpdatePlayerGameDto) {
    return this.repo.update(id, dto);
  }

  async remove(id: string) {
    return this.repo.delete(id);
  }
}
