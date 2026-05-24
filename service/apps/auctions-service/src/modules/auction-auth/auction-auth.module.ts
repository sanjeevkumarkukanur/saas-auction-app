import { Module } from '@nestjs/common';
import { AuctionAuthService } from './auction-auth.service';
import { AuctionAuthRepository } from './auction-auth.repository';
import { AuctionAuthController } from './auction-auth.controller';

@Module({
  controllers: [AuctionAuthController],
  providers: [AuctionAuthService, AuctionAuthRepository, PrismaModule],
  exports: [AuctionAuthService],
})
export class AuctionAuthModule {}
