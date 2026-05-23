import { Injectable } from '@nestjs/common';
import { Server } from 'socket.io';

@Injectable()
export class LiveService {
  private server: Server;

  setServer(server: Server) {
    this.server = server;
  }

  // 🔥 Emit live score update
  emitScoreUpdate(matchId: string, payload: any) {
    if (!this.server) return;

    this.server.to(`match:${matchId}`).emit('score.updated', payload);
  }

  // 🔥 Emit timeline event
  emitTimeline(matchId: string, payload: any) {
    if (!this.server) return;

    this.server.to(`match:${matchId}`).emit('timeline.updated', payload);
  }

  // 🔥 Emit match completed
  emitMatchCompleted(matchId: string, payload: any) {
    if (!this.server) return;

    this.server.to(`match:${matchId}`).emit('match.completed', payload);
  }
}
