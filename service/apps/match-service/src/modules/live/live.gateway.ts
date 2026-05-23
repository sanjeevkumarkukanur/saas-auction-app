import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { LiveService } from './live.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
  namespace: '/live',
})
export class LiveGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  constructor(private readonly liveService: LiveService) {}

  afterInit(server: Server) {
    this.liveService.setServer(server);
  }

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  // 🔥 Join match room
  @SubscribeMessage('join.match')
  handleJoin(
    @MessageBody() matchId: string,
    @ConnectedSocket() client: Socket,
  ) {
    client.join(`match:${matchId}`);
    return { message: `Joined match ${matchId}` };
  }

  // 🔥 Leave match room
  @SubscribeMessage('leave.match')
  handleLeave(
    @MessageBody() matchId: string,
    @ConnectedSocket() client: Socket,
  ) {
    client.leave(`match:${matchId}`);
    return { message: `Left match ${matchId}` };
  }
}
