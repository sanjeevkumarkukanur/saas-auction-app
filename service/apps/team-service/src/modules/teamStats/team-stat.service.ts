import { Injectable, NotFoundException } from '@nestjs/common';
import { TeamStatRepository } from './team-stat.repository';
import { CreateTeamStatDto } from '@libs/common';
import { Prisma } from '@prisma/teams-client';

@Injectable()
export class TeamStatService {
  constructor(private readonly repo: TeamStatRepository) {}

  async create(dto: CreateTeamStatDto) {
    const purse = new Prisma.Decimal(dto.purseLeft);

    return this.repo.create({
      tenantId: dto.tenantId,
      seasonTeamId: dto.seasonTeamId,
      purseLeft: purse,
      totalSpent: new Prisma.Decimal(0),
      playersBought: 0,
      unsoldSlots: 0,
    });
  }

  async updateOnPlayerBuy(seasonTeamId: string, bidAmount: number) {
    const stat = await this.repo.findBySeasonTeamId(seasonTeamId);

    // ✅ FIX: null check
    if (!stat) {
      throw new NotFoundException('TeamStat not found');
    }

    const bid = new Prisma.Decimal(bidAmount);

    const totalSpent = stat.totalSpent.plus(bid);
    const playersBought = stat.playersBought + 1;
    const avg = totalSpent.div(playersBought);

    return this.repo.update(seasonTeamId, {
      totalSpent,
      playersBought,
      purseLeft: stat.purseLeft.minus(bid),
      averageBid: avg,
      topBid: !stat.topBid || stat.topBid.lt(bid) ? bid : stat.topBid,
    });
  }

  async incrementUnsold(seasonTeamId: string) {
    const stat = await this.repo.findBySeasonTeamId(seasonTeamId);

    // ✅ FIX: null check
    if (!stat) {
      throw new NotFoundException('TeamStat not found');
    }

    return this.repo.update(seasonTeamId, {
      unsoldSlots: stat.unsoldSlots + 1,
    });
  }

  findAll(filter: any) {
    return this.repo.findAll(filter);
  }

  async findOne(seasonTeamId: string) {
    const stat = await this.repo.findBySeasonTeamId(seasonTeamId);

    if (!stat) {
      throw new NotFoundException('TeamStat not found');
    }

    return stat;
  }
}
