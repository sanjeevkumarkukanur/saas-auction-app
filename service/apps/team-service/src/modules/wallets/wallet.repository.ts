import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/teams-client';

@Injectable()
export class WalletRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.WalletUncheckedCreateInput) {
    return this.prisma.wallet.create({ data });
  }

  findBySeasonTeamId(seasonTeamId: string) {
    return this.prisma.wallet.findUnique({
      where: { seasonTeamId },
    });
  }

  update(seasonTeamId: string, data: Prisma.WalletUncheckedUpdateInput) {
    return this.prisma.wallet.update({
      where: { seasonTeamId },
      data,
    });
  }
}
