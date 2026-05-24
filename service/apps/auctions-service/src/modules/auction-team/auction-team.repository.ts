import { Injectable } from '@nestjs/common';
import { Prisma } from 'prisma/generated/auction-client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuctionTeamRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.AuctionTeamCreateInput) {
    return this.prisma.auctionTeam.create({ data });
  }

  findByAuction(auctionId: string) {
    return this.prisma.auctionTeam.findMany({
      where: { auctionId },
    });
  }

  updateBudget(teamId: string, auctionId: string, amount: number) {
    return this.prisma.auctionTeam.update({
      where: {
        auctionId_teamId: {
          auctionId,
          teamId,
        },
      },
      data: {
        remainingBudget: amount,
      },
    });
  }

  incrementPlayers(auctionId: string, teamId: string) {
    return this.prisma.auctionTeam.update({
      where: {
        auctionId_teamId: {
          auctionId,
          teamId,
        },
      },
      data: {
        totalPlayers: { increment: 1 },
      },
    });
  }
}
