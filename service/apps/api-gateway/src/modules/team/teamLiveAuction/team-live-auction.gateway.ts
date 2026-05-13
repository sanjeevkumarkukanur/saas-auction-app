import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Server, Socket } from 'socket.io';
import { firstValueFrom } from 'rxjs';

@WebSocketGateway({
  namespace: '/auction',
  cors: true,
})
export class TeamLiveAuctionGateway {
  @WebSocketServer()
  server: Server;

  constructor(
    @Inject('TEAM_SERVICE')
    private readonly client: ClientProxy,
  ) {}

  // ✅ Join room
  @SubscribeMessage('join')
  handleJoin(
    @MessageBody() seasonTeamId: string,
    @ConnectedSocket() socket: Socket,
  ) {
    socket.join(seasonTeamId);

    return { joined: true };
  }

  // 🔥 Place Bid (Proxy → team-service)
  @SubscribeMessage('placeBid')
  async placeBid(
    @MessageBody()
    payload: { seasonTeamId: string; amount: number },
    @ConnectedSocket() socket: Socket,
  ) {
    try {
      const result = await firstValueFrom(
        this.client.send('auction.placeBid', payload),
      );

      // broadcast to room
      this.server.to(payload.seasonTeamId).emit('bidUpdate', result);

      return result;
    } catch (err: unknown) {
      return {
        error: true,
        message: err instanceof Error ? err.message : 'Bid failed',
      };
    }
  }

  // 🔥 Release bid
  @SubscribeMessage('releaseBid')
  async releaseBid(
    @MessageBody()
    payload: {
      seasonTeamId: string;
      amount: number;
    },
  ) {
    const result = await firstValueFrom(
      this.client.send('auction.releaseBid', payload),
    );

    this.server.to(payload.seasonTeamId).emit('bidReleased', result);
  }

  // 🔥 Confirm bid
  @SubscribeMessage('confirmBid')
  async confirmBid(
    @MessageBody()
    payload: {
      seasonTeamId: string;
      amount: number;
    },
  ) {
    const result = await firstValueFrom(
      this.client.send('auction.confirmBid', payload),
    );

    this.server.emit('playerSold', result);
  }
}
