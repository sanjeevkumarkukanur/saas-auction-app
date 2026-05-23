import { Injectable, NotFoundException } from '@nestjs/common';
import { PlayerRepository } from './players.repository';
import { CreatePlayerDto, FilterPlayerDto, UpdatePlayerDto } from '@app/common';

@Injectable()
export class PlayerService {
  constructor(private readonly playerRepo: PlayerRepository) {}

  async create(dto: CreatePlayerDto) {
    return this.playerRepo.create(dto);
  }

  async findAll(filter: FilterPlayerDto) {
    return this.playerRepo.findAll(filter);
  }

  async findOne(id: string) {
    const player = await this.playerRepo.findById(id);
    if (!player) throw new NotFoundException('Player not found');
    return player;
  }

  async update(id: string, dto: UpdatePlayerDto) {
    await this.findOne(id);
    return this.playerRepo.update(id, dto);
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.playerRepo.delete(id);
  }
}
