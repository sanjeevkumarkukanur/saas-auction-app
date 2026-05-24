import { Injectable } from '@nestjs/common';
import { AuctionRepository } from './auction.repository';
import { CreateAuctionDto, UpdateAuctionStatusDto } from '@app/common';

@Injectable()
export class AuctionService {
  constructor(private readonly repo: AuctionRepository) {}

  async createAuction(dto: CreateAuctionDto) {
    const auction = await this.repo.create({
      name: dto.name,
      leagueId: dto.leagueId,
      seasonId: dto.seasonId,
      tenantId: dto.tenantId,
      startTime: dto.startTime ? new Date(dto.startTime) : null,
    });

    return {
      message: 'Auction created',
      data: auction,
    };
  }

  startAuction(auctionId: string) {
    return this.repo.start(auctionId);
  }

  pauseAuction(auctionId: string) {
    return this.repo.pause(auctionId);
  }

  endAuction(auctionId: string) {
    return this.repo.end(auctionId);
  }

  updateStatus(dto: UpdateAuctionStatusDto) {
    return this.repo.updateStatus(dto.auctionId, dto.status);
  }

  getAuction(auctionId: string) {
    return this.repo.findById(auctionId);
  }

  listAuctions() {
    return this.repo.findAll();
  }
}
