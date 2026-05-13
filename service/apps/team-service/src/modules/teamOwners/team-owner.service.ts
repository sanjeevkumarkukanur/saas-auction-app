import { Injectable } from '@nestjs/common';
import {
  CreateTeamOwnerDto,
  TeamOwnerFilterDto,
  UpdateTeamOwnerDto,
} from '@libs/common';
import { TeamOwnerRepository } from './team-owner.repository';

@Injectable()
export class TeamOwnerService {
  constructor(private readonly repo: TeamOwnerRepository) {}

  create(dto: CreateTeamOwnerDto) {
    return this.repo.create({
      ...dto,
    });
  }

  findAll(filter: TeamOwnerFilterDto) {
    return this.repo.findAll(filter);
  }

  findOne(id: string) {
    return this.repo.findById(id);
  }

  update(id: string, dto: UpdateTeamOwnerDto) {
    return this.repo.update(id, dto);
  }

  // 🔥 Ownership transfer (close old + create new)
  async transfer(dto: CreateTeamOwnerDto) {
    // close existing active owner
    await this.repo.updateMany({
      where: {
        teamId: dto.teamId,
        toDate: null,
      },
      data: {
        toDate: new Date(),
      },
    });

    return this.create(dto);
  }
}
