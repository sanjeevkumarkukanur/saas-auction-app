import { Injectable } from '@nestjs/common';
import { AuctionTeamRepository } from './auction-team.repository';
import { RegisterAuctionTeamDto } from '@app/common';

@Injectable()
export class AuctionTeamService {
  constructor(private readonly repo: AuctionTeamRepository) {}

  registerTeam(dto: RegisterAuctionTeamDto) {
    return this.repo.create({
      auctionId: dto.auctionId,
      teamId: dto.teamId,
      remainingBudget: dto.initialBudget,
    });
  }

  getAuctionTeams(auctionId: string) {
    return this.repo.findByAuction(auctionId);
  }

  async deductBudget(auctionId: string, teamId: string, amount: number) {
    const teams = await this.repo.findByAuction(auctionId);
    const team = teams.find((t) => t.teamId === teamId);

    if (!team) throw new Error('Team not found');

    if (team.remainingBudget < amount) {
      throw new Error('Insufficient budget');
    }

    return this.repo.updateBudget(
      teamId,
      auctionId,
      team.remainingBudget - amount,
    );
  }
}
