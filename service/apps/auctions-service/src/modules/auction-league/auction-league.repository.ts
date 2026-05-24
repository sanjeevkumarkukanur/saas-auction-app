import { Injectable } from '@nestjs/common';
import { Prisma } from 'prisma/generated/auction-client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuctionLeagueRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.AuctionLeagueCreateInput) {
    return this.prisma.auctionLeague.create({ data });
  }

  findByAuction(auctionId: string) {
    return this.prisma.auctionLeague.findMany({
      where: { auctionId },
    });
  }

  remove(auctionId: string, leagueId: string) {
    return this.prisma.auctionLeague.delete({
      where: {
        auctionId_leagueId: {
          auctionId,
          leagueId,
        },
      },
    });
  }
}
