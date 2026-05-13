import { Injectable } from '@nestjs/common';
import {
  CreateSeasonTeamDto,
  UpdateSeasonTeamDto,
  SeasonTeamFilterDto,
} from '@libs/common';
import { SeasonTeamRepository } from './season-team.repository';

@Injectable()
export class SeasonTeamService {
  constructor(private readonly repo: SeasonTeamRepository) {}

  create(dto: CreateSeasonTeamDto) {
    return this.repo.create(dto);
  }

  findAll(query: SeasonTeamFilterDto) {
    return this.repo.findAll(query);
  }

  findOne(id: string) {
    return this.repo.findById(id);
  }

  update(id: string, dto: UpdateSeasonTeamDto) {
    return this.repo.update(id, dto);
  }

  remove(id: string) {
    return this.repo.delete(id);
  }
}
