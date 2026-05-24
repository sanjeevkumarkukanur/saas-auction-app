import { RedisModule } from '@libs/redis';
import { Module } from '@nestjs/common';
import { AuctionGateway } from './gateways/auction.gateway';
import { NotificationGateway } from './gateways/notification.gateway';
import { PresenceGateway } from './gateways/presence.gateway';

@Module({
  imports: [RedisModule],
  // controllers: [HealthController],
  providers: [AuctionGateway, NotificationGateway, PresenceGateway],
})
export class RealtimeServiceModule {}
