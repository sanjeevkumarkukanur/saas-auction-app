import { Injectable } from '@nestjs/common';
import { Prisma } from 'prisma/generated/auction-client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuctionAuthRepository {
  constructor(private readonly prisma: PrismaService) {}

  assignRole(data: Prisma.AuctionAuthCreateInput) {
    return this.prisma.auctionAuth.upsert({
      where: {
        auctionId_userId: {
          auctionId: data.auctionId,
          userId: data.userId,
        },
      },
      update: {
        role: data.role,
      },
      create: data,
    });
  }

  findUserRole(auctionId: string, userId: string) {
    return this.prisma.auctionAuth.findUnique({
      where: {
        auctionId_userId: {
          auctionId,
          userId,
        },
      },
    });
  }
}
