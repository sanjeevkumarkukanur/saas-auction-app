import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { Prisma } from 'prisma/generated/auction-client';

@Injectable()
export class AuctionPlayerRepository {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * ✅ Add player to auction
   */
  create(data: Prisma.AuctionPlayerCreateInput) {
    return this.prisma.auctionPlayer.create({ data });
  }

  /**
   * ✅ Get players in auction
   */
  findByAuction(auctionId: string) {
    return this.prisma.auctionPlayer.findMany({
      where: { auctionId },
      orderBy: { createdAt: 'asc' },
    });
  }

  /**
   * ✅ Find one player
   */
  findOne(auctionId: string, playerSeasonId: string) {
    return this.prisma.auctionPlayer.findUnique({
      where: {
        auctionId_playerSeasonId: {
          auctionId,
          playerSeasonId,
        },
      },
    });
  }

  /**
   * ✅ Mark SOLD
   */
  markSold(auctionId: string, playerSeasonId: string, soldPrice: number) {
    return this.prisma.auctionPlayer.update({
      where: {
        auctionId_playerSeasonId: {
          auctionId,
          playerSeasonId,
        },
      },
      data: {
        status: 'SOLD',
        soldPrice,
      },
    });
  }

  /**
   * ✅ Mark UNSOLD
   */
  markUnsold(auctionId: string, playerSeasonId: string) {
    return this.prisma.auctionPlayer.update({
      where: {
        auctionId_playerSeasonId: {
          auctionId,
          playerSeasonId,
        },
      },
      data: {
        status: 'UNSOLD',
      },
    });
  }
}
