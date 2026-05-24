import { Injectable } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { StatsEvents, MatchCompletedEvent } from './stats.events';
import { StandingsService } from '../standings/standings.service';
import { PlayerStatsService } from '../player-stats/player-stats.service';
import { LeaderboardService } from '../leaderboard/leaderboard.service';

@Injectable()
export class StatsListener {
  constructor(
    private readonly standingsService: StandingsService,
    private readonly playerStatsService: PlayerStatsService,
    private readonly leaderboardService: LeaderboardService,
  ) {}

  @MessagePattern(StatsEvents.MATCH_COMPLETED)
  async handleMatchCompleted(@Payload() payload: MatchCompletedEvent) {
    const {
      seasonId,
      tournamentId,
      teamA,
      teamB,
      winnerTeamId,
      teamAScore,
      teamBScore,
      playerPerformances,
    } = payload;

    // 🔥 Update Team Standings
    await this.standingsService.updateFromMatch(payload);

    // 🔥 Update Player Stats
    if (playerPerformances?.length) {
      for (const performance of playerPerformances) {
        await this.playerStatsService.updatePlayerStats(
          seasonId,
          performance.playerId,
          performance.teamId,
          performance.runs
            ? {
                runs: performance.runs,
                balls: performance.balls ?? 0,
              }
            : undefined,
          performance.wickets
            ? {
                wickets: performance.wickets,
                overs: performance.overs ?? 0,
                runsConceded: performance.runsConceded ?? 0,
              }
            : undefined,
        );
      }
    }

    // 🔥 Rebuild Leaderboard
    await this.leaderboardService.rebuildLeaderboard(seasonId, tournamentId);

    return { message: 'Stats updated successfully' };
  }
}
