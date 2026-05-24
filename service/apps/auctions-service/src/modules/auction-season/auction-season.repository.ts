import { PrismaService } from '@/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma } from 'prisma/generated/auction-client';

@Injectable()
export class AuctionSeasonRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.AuctionSeasonCreateInput) {
    return this.prisma.auctionSeason.create({ data });
  }

  findByAuction(auctionId: string) {
    return this.prisma.auctionSeason.findMany({
      where: { auctionId },
    });
  }

  findBySeason(seasonId: string) {
    return this.prisma.auctionSeason.findMany({
      where: { seasonId },
    });
  }

  remove(auctionId: string, seasonId: string) {
    return this.prisma.auctionSeason.delete({
      where: {
        auctionId_seasonId: {
          auctionId,
          seasonId,
        },
      },
    });
  }
}
