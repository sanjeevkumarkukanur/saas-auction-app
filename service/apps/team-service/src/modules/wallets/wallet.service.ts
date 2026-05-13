import { BadRequestException, Injectable } from '@nestjs/common';
import { WalletRepository } from './wallet.repository';
import { CreateWalletDto } from '@libs/common';
import { Prisma } from '@prisma/teams-client';

@Injectable()
export class WalletService {
  constructor(private readonly repo: WalletRepository) {}

  async create(dto: CreateWalletDto) {
    const total = new Prisma.Decimal(dto.totalBudget);

    return this.repo.create({
      tenantId: dto.tenantId,
      seasonTeamId: dto.seasonTeamId, // ✅ now allowed
      totalBudget: total,
      remainingBudget: total,
      spentBudget: new Prisma.Decimal(0),
      reservedBudget: new Prisma.Decimal(0),
    });
  }

  async reserve(seasonTeamId: string, amount: number) {
    const wallet = await this.repo.findBySeasonTeamId(seasonTeamId);

    if (!wallet) throw new BadRequestException('Wallet not found');

    const amt = new Prisma.Decimal(amount);

    if (wallet.remainingBudget.lt(amt)) {
      throw new BadRequestException('Insufficient balance');
    }

    return this.repo.update(seasonTeamId, {
      remainingBudget: wallet.remainingBudget.minus(amt),
      reservedBudget: wallet.reservedBudget.plus(amt),
    });
  }

  async release(seasonTeamId: string, amount: number) {
    const wallet = await this.repo.findBySeasonTeamId(seasonTeamId);
    if (!wallet) throw new BadRequestException('Wallet not found');

    const amt = new Prisma.Decimal(amount);

    if (wallet.reservedBudget.lt(amt)) {
      throw new BadRequestException('Invalid release');
    }

    return this.repo.update(seasonTeamId, {
      remainingBudget: wallet.remainingBudget.plus(amt),
      reservedBudget: wallet.reservedBudget.minus(amt),
    });
  }

  async deduct(seasonTeamId: string, amount: number) {
    const wallet = await this.repo.findBySeasonTeamId(seasonTeamId);
    if (!wallet) throw new BadRequestException('Wallet not found');

    const amt = new Prisma.Decimal(amount);

    if (wallet.reservedBudget.lt(amt)) {
      throw new BadRequestException('Invalid deduction');
    }

    return this.repo.update(seasonTeamId, {
      reservedBudget: wallet.reservedBudget.minus(amt),
      spentBudget: wallet.spentBudget.plus(amt),
    });
  }

  async getWallet(seasonTeamId: string) {
    const wallet = await this.repo.findBySeasonTeamId(seasonTeamId);
    if (!wallet) throw new BadRequestException('Wallet not found');

    return wallet;
  }
}
