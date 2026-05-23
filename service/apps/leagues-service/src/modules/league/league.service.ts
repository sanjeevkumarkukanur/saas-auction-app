import { Injectable, NotFoundException } from '@nestjs/common';
import { LeaguesRepository } from './leagues.repository';
import { LeagueStatus, Prisma } from '../../../prisma/generated/league-client';
import { CreateLeagueDto, LeagueFilterDto, UpdateLeagueDto } from '@app/common';

@Injectable()
export class LeaguesService {
  constructor(private readonly repo: LeaguesRepository) {}

  async create(dto: CreateLeagueDto) {
    const data: Prisma.LeagueCreateInput = {
      name: dto.name,
      tenantId: dto.tenantId,
      tenantGameId: dto.tenantGameId,
      status: dto.status ?? LeagueStatus.DRAFT,
      description: dto.description,
    };

    return this.repo.create(data);
  }

  async findAll(filter: LeagueFilterDto) {
    const where: Prisma.LeagueWhereInput = {};

    if (filter.tenantId) where.tenantId = filter.tenantId;
    if (filter.status) where.status = filter.status;
    if (filter.tenantGameId) where.tenantGameId = filter.tenantGameId;

    return this.repo.findAll(where);
  }

  async findOne(id: string) {
    const league = await this.repo.findById(id);
    if (!league) {
      throw new NotFoundException('League not found');
    }
    return league;
  }

  async update(id: string, dto: UpdateLeagueDto) {
    await this.findOne(id);

    const updateData: Prisma.LeagueUpdateInput = {};

    if (dto.name !== undefined) updateData.name = dto.name;
    if (dto.status !== undefined) updateData.status = dto.status;

    return this.repo.update(id, updateData);
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.repo.delete(id);
  }
}
