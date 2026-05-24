import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  ConnectedSocket,
  MessageBody,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { RoomManager } from '../rooms/room.manager';

@WebSocketGateway({
  cors: { origin: '*' },
})
export class AuctionGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('joinAuction')
  handleJoin(
    @MessageBody()
    data: { tenantId: string; auctionId: string },
    @ConnectedSocket() client: Socket,
  ) {
    const room = RoomManager.auctionRoom(data.tenantId, data.auctionId);

    client.join(room);
    console.log(`Client joined ${room}`);
  }

  broadcastBid(tenantId: string, auctionId: string, payload: any) {
    const room = RoomManager.auctionRoom(tenantId, auctionId);

    this.server.to(room).emit('bidUpdate', payload);
  }
}
