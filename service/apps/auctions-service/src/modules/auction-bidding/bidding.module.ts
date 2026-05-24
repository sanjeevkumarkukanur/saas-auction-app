import { Module } from '@nestjs/common';
import { BiddingLockService } from './bidding.lock.service';
import { BiddingService } from './bidding.service';
import { BiddingController } from './bidding.controller';

@Module({
  providers: [BiddingService, BiddingLockService],
  controllers: [BiddingController],
  exports: [
    BiddingService, // optional (if used in other modules)
  ],
})
export class BiddingModule {}
