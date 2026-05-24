import { Injectable, NotFoundException } from '@nestjs/common';
import { TournamentRepository } from './tournament.repository';
import { CreateTournamentDto, UpdateTournamentDto } from '@libs/common';

@Injectable()
export class TournamentService {
  constructor(private readonly repository: TournamentRepository) {}

  create(dto: CreateTournamentDto) {
    return this.repository.create({
      ...dto,
      startDate: dto.startDate ? new Date(dto.startDate) : undefined,
      endDate: dto.endDate ? new Date(dto.endDate) : undefined,
    });
  }

  findAll() {
    return this.repository.findAll();
  }

  async findOne(id: string) {
    const tournament = await this.repository.findById(id);

    if (!tournament) {
      throw new NotFoundException('Tournament not found');
    }

    return tournament;
  }

  async update(id: string, dto: UpdateTournamentDto) {
    await this.findOne(id);

    return this.repository.update(id, {
      ...dto,
      startDate: dto.startDate ? new Date(dto.startDate) : undefined,
      endDate: dto.endDate ? new Date(dto.endDate) : undefined,
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.repository.delete(id);
  }
}
