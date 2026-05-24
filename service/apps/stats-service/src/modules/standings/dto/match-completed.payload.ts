export interface TeamScorePayload {
  runs: number;
  overs: number;
}

export interface MatchCompletedPayload {
  seasonId: string;
  tournamentId: string;

  teamA: string;
  teamB: string;

  winnerTeamId: string | null;

  teamAScore: TeamScorePayload;
  teamBScore: TeamScorePayload;
}
