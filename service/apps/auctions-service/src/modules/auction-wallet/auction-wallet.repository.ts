import { Injectable } from '@nestjs/common';
import { Prisma } from 'prisma/generated/auction-client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuctionWalletRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.AuctionWalletCreateInput) {
    return this.prisma.auctionWallet.create({ data });
  }

  findByTeam(auctionId: string, teamId: string) {
    return this.prisma.auctionWallet.findUnique({
      where: {
        auctionId_teamId: {
          auctionId,
          teamId,
        },
      },
    });
  }

  updateBudget(auctionId: string, teamId: string, remainingBudget: number) {
    return this.prisma.auctionWallet.update({
      where: {
        auctionId_teamId: {
          auctionId,
          teamId,
        },
      },
      data: { remainingBudget },
    });
  }
}
