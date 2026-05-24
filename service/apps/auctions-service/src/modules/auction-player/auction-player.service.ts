import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { AuctionPlayerRepository } from './auction-player.repository';
import { AddPlayerToAuctionDto } from '@app/common';

@Injectable()
export class AuctionPlayerService {
  constructor(
    private readonly repo: AuctionPlayerRepository,
    private readonly prisma: PrismaService,
  ) {}

  /**
   * ✅ Add player to auction
   */
  async addPlayerToAuction(dto: AddPlayerToAuctionDto) {
    return this.repo.create({
      auctionId: dto.auctionId,
      playerSeasonId: dto.playerSeasonId,
      basePrice: dto.basePrice,
      status: 'AVAILABLE',
    });
  }

  /**
   * ✅ Get players in auction
   */
  async getAuctionPlayers(auctionId: string) {
    return this.repo.findByAuction(auctionId);
  }

  /**
   * ✅ Mark SOLD
   */
  async markPlayerSold(
    playerSeasonId: string,
    teamId: string,
    amount: number,
    auctionId: string,
  ) {
    // 🔥 Save bid history
    await this.prisma.bid.create({
      data: {
        auctionId,
        playerSeasonId,
        teamId,
        amount,
      },
    });

    // 🔥 Update auction player
    const updated = await this.repo.markSold(auctionId, playerSeasonId, amount);

    return {
      message: 'Player sold successfully',
      data: updated,
    };
  }

  /**
   * ✅ Mark UNSOLD
   */
  async markPlayerUnsold(auctionId: string, playerSeasonId: string) {
    return this.repo.markUnsold(auctionId, playerSeasonId);
  }
}
