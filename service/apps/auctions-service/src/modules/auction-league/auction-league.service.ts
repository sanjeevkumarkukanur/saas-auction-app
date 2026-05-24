import { Injectable } from '@nestjs/common';
import { AuctionLeagueRepository } from './auction-league.repository';
import { AddAuctionLeagueDto } from '@app/common';

@Injectable()
export class AuctionLeagueService {
  constructor(private readonly repo: AuctionLeagueRepository) {}

  addLeague(dto: AddAuctionLeagueDto) {
    return this.repo.create({
      auctionId: dto.auctionId,
      leagueId: dto.leagueId,
    });
  }

  getLeagues(auctionId: string) {
    return this.repo.findByAuction(auctionId);
  }

  removeLeague(auctionId: string, leagueId: string) {
    return this.repo.remove(auctionId, leagueId);
  }
}
