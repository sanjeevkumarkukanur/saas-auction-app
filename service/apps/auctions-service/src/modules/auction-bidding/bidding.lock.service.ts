import { Injectable } from '@nestjs/common';

@Injectable()
export class BiddingLockService {
  private locks = new Set<string>();

  /**
   * 🔒 Lock a player
   */
  acquireLock(playerSeasonId: string): boolean {
    if (this.locks.has(playerSeasonId)) {
      return false;
    }

    this.locks.add(playerSeasonId);
    return true;
  }

  /**
   * 🔓 Release lock
   */
  releaseLock(playerSeasonId: string) {
    this.locks.delete(playerSeasonId);
  }
}
