import { Injectable } from '@nestjs/common';
import { BiddingLockService } from './bidding.lock.service';

@Injectable()
export class BiddingService {
  constructor(private readonly lock: BiddingLockService) {}

  /**
   * 🔥 MAIN METHOD (no async → lint safe)
   */
  placeBid(data: {
    auctionId: string;
    playerSeasonId: string;
    teamId: string;
    amount: number;
    currentBid?: number;
    minIncrement?: number;
    walletBalance?: number;
  }) {
    const {
      playerSeasonId,
      amount,
      currentBid = 0,
      minIncrement = 1000000,
      walletBalance = 0,
    } = data;

    // 🔒 Step 1: Lock
    const locked = this.lock.acquireLock(playerSeasonId);

    if (!locked) {
      throw new Error('Another bid is in progress for this player');
    }

    try {
      // ✅ Step 2: Validate higher bid
      if (amount <= currentBid) {
        throw new Error('Bid must be higher than current bid');
      }

      // ✅ Step 3: Validate increment
      if (amount < currentBid + minIncrement) {
        throw new Error('Bid increment too low');
      }

      // ✅ Step 4: Validate wallet
      if (walletBalance < amount) {
        throw new Error('Insufficient wallet balance');
      }

      // 🔥 Step 5: Success response
      return {
        success: true,
        message: 'Bid placed successfully',
        data: {
          playerSeasonId,
          teamId: data.teamId,
          amount,
        },
      };
    } finally {
      // 🔓 Step 6: Always release lock
      this.lock.releaseLock(playerSeasonId);
    }
  }
}
