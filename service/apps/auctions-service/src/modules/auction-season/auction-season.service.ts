import { Injectable } from '@nestjs/common';
import { AuctionSeasonRepository } from './auction-season.repository';
import { AddAuctionSeasonDto } from '@app/common';

@Injectable()
export class AuctionSeasonService {
  constructor(private readonly repo: AuctionSeasonRepository) {}

  addSeason(dto: AddAuctionSeasonDto) {
    return this.repo.create({
      auctionId: dto.auctionId,
      seasonId: dto.seasonId,
    });
  }

  getByAuction(auctionId: string) {
    return this.repo.findByAuction(auctionId);
  }

  getBySeason(seasonId: string) {
    return this.repo.findBySeason(seasonId);
  }

  removeSeason(auctionId: string, seasonId: string) {
    return this.repo.remove(auctionId, seasonId);
  }
}
