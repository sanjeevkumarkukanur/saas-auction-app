import { Injectable } from '@nestjs/common';
import { AuctionWalletRepository } from './auction-wallet.repository';
import { InitAuctionWalletDto } from '@app/common';

@Injectable()
export class AuctionWalletService {
  constructor(private readonly repo: AuctionWalletRepository) {}

  // ✅ Initialize wallet
  initWallet(dto: InitAuctionWalletDto) {
    return this.repo.create({
      auctionId: dto.auctionId,
      teamId: dto.teamId,
      totalBudget: dto.totalBudget,
      remainingBudget: dto.totalBudget,
    });
  }

  // ✅ Get wallet
  getWallet(auctionId: string, teamId: string) {
    return this.repo.findByTeam(auctionId, teamId);
  }

  // ✅ Deduct amount (🔥 used in bidding)
  async deductBudget(auctionId: string, teamId: string, amount: number) {
    const wallet = await this.repo.findByTeam(auctionId, teamId);

    if (!wallet) throw new Error('Wallet not found');

    if (wallet.remainingBudget < amount) {
      throw new Error('Insufficient balance');
    }

    const updatedBalance = wallet.remainingBudget - amount;

    return this.repo.updateBudget(auctionId, teamId, updatedBalance);
  }
}
