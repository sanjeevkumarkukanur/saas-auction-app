import { AuctionStatus } from '@libs/common';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuctionRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: {
    name: string;
    leagueId: string;
    seasonId: string;
    tenantId: string;
    startTime?: Date | null;
  }) {
    return this.prisma.auction.create({ data });
  }

  updateStatus(auctionId: string, status: AuctionStatus) {
    return this.prisma.auction.update({
      where: { id: auctionId },
      data: { status },
    });
  }

  start(auctionId: string) {
    return this.prisma.auction.update({
      where: { id: auctionId },
      data: {
        status: 'LIVE',
        startTime: new Date(),
      },
    });
  }

  pause(auctionId: string) {
    return this.prisma.auction.update({
      where: { id: auctionId },
      data: {
        status: 'PAUSED',
      },
    });
  }

  end(auctionId: string) {
    return this.prisma.auction.update({
      where: { id: auctionId },
      data: {
        status: 'COMPLETED',
        endTime: new Date(),
      },
    });
  }

  findById(id: string) {
    return this.prisma.auction.findUnique({
      where: { id },
    });
  }

  findAll() {
    return this.prisma.auction.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }
}
