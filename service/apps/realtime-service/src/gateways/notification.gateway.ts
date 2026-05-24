import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { RoomManager } from '../rooms/room.manager';

@WebSocketGateway({
  cors: { origin: '*' },
})
export class NotificationGateway {
  @WebSocketServer()
  server: Server;

  sendToUser(tenantId: string, userId: string, payload: any) {
    const room = RoomManager.userRoom(tenantId, userId);
    this.server.to(room).emit('notification', payload);
  }
}
