import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { MatchEvents } from './match.events';

@Injectable()
export class EventPublisher {
  constructor(
    @Inject('TOURNAMENT_SERVICE')
    private readonly tournamentClient: ClientProxy,

    @Inject('STANDINGS_SERVICE')
    private readonly standingsClient: ClientProxy,
  ) {}

  // 🔥 Emit match completed
  emitMatchCompleted(payload: any) {
    this.tournamentClient.emit(MatchEvents.MATCH_COMPLETED, payload);

    this.standingsClient.emit(MatchEvents.MATCH_COMPLETED, payload);
  }

  // 🔥 Emit score updated
  emitScoreUpdated(payload: any) {
    this.tournamentClient.emit(MatchEvents.SCORE_UPDATED, payload);
  }

  // 🔥 Emit match started
  emitMatchStarted(payload: any) {
    this.tournamentClient.emit(MatchEvents.MATCH_STARTED, payload);
  }

  // 🔥 Emit match abandoned
  emitMatchAbandoned(payload: any) {
    this.tournamentClient.emit(MatchEvents.MATCH_ABANDONED, payload);
  }
}
