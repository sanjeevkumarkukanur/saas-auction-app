import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { TeamLiveAuctionService } from './team-live-auction.service';
import { PlaceBidDto } from '@libs/common';

@WebSocketGateway({
  namespace: '/auction',
  cors: true,
})
export class TeamLiveAuctionGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly service: TeamLiveAuctionService) {}

  // 🔥 Join auction room
  @SubscribeMessage('join')
  handleJoin(
    @MessageBody() seasonTeamId: string,
    @ConnectedSocket() socket: Socket,
  ) {
    socket.join(seasonTeamId);

    return { message: 'joined', seasonTeamId };
  }

  // 🔥 Place bid
  @SubscribeMessage('placeBid')
  async handleBid(
    @MessageBody() dto: PlaceBidDto,
    @ConnectedSocket() socket: Socket,
  ) {
    try {
      const result = await this.service.placeBid(dto.seasonTeamId, dto.amount);

      // 🔥 broadcast only to auction room
      this.server.to(dto.seasonTeamId).emit('bidUpdate', {
        seasonTeamId: dto.seasonTeamId,
        amount: dto.amount,
      });

      return result;
    } catch (err: unknown) {
      return {
        error: true,
        message: err instanceof Error ? err.message : 'Something went wrong',
      };
    }
  }

  // 🔥 Release bid (lost)
  @SubscribeMessage('releaseBid')
  async release(@MessageBody() dto: PlaceBidDto) {
    await this.service.releaseBid(dto.seasonTeamId, dto.amount);

    this.server.emit('bidReleased', dto);
  }

  // 🔥 Confirm winner
  @SubscribeMessage('confirmBid')
  async confirm(@MessageBody() dto: PlaceBidDto) {
    await this.service.confirmPurchase(dto.seasonTeamId, dto.amount);

    this.server.emit('playerSold', dto);
  }
}
