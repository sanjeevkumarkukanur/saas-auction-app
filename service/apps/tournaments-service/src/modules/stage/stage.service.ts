import { Injectable, NotFoundException } from '@nestjs/common';
import { StageRepository } from './stage.repository';
import { CreateStageDto, UpdateStageDto } from '@libs/common';

@Injectable()
export class StageService {
  constructor(private readonly repository: StageRepository) {}

  create(dto: CreateStageDto) {
    return this.repository.create(dto);
  }

  findByTournament(tournamentId: string) {
    return this.repository.findByTournament(tournamentId);
  }

  async findOne(id: string) {
    const stage = await this.repository.findById(id);

    if (!stage) {
      throw new NotFoundException('Stage not found');
    }

    return stage;
  }

  async update(id: string, dto: UpdateStageDto) {
    await this.findOne(id);
    return this.repository.update(id, dto);
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.repository.delete(id);
  }
}
