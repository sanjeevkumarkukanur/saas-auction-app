import { Module } from '@nestjs/common';
import { AuctionGateway } from '../../gateways/auction.gateway';
import { AuctionListener } from './auction.listener';

@Module({
  providers: [AuctionGateway, AuctionListener],
})
export class AuctionModule {}