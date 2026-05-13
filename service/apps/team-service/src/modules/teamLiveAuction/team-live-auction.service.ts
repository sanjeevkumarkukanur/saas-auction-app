import { Injectable, BadRequestException } from '@nestjs/common';
import { WalletService } from '../wallets/wallet.service';

@Injectable()
export class TeamLiveAuctionService {
  constructor(private readonly walletService: WalletService) {}

  // ✅ validate + reserve bid
  async placeBid(seasonTeamId: string, amount: number) {
    const wallet = await this.walletService.getWallet(seasonTeamId);

    if (!wallet) {
      throw new BadRequestException('Wallet not found');
    }

    if (wallet.remainingBudget < amount) {
      throw new BadRequestException('Insufficient funds');
    }

    // reserve amount
    await this.walletService.reserve(seasonTeamId, amount);

    return {
      success: true,
      seasonTeamId,
      amount,
    };
  }

  async releaseBid(seasonTeamId: string, amount: number) {
    return this.walletService.release(seasonTeamId, amount);
  }

  async confirmPurchase(seasonTeamId: string, amount: number) {
    return this.walletService.deduct(seasonTeamId, amount);
  }
}
