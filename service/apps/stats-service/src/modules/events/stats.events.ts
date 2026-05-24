export const StatsEvents = {
  MATCH_COMPLETED: 'match.completed',
} as const;

export interface MatchCompletedEvent {
  seasonId: string;
  tournamentId: string;
  matchId: string;

  teamA: string;
  teamB: string;
  winnerTeamId: string;

  teamAScore: {
    runs: number;
    overs: number;
  };

  teamBScore: {
    runs: number;
    overs: number;
  };

  playerPerformances?: Array<{
    playerId: string;
    teamId: string;
    runs?: number;
    balls?: number;
    wickets?: number;
    overs?: number;
    runsConceded?: number;
  }>;
}
