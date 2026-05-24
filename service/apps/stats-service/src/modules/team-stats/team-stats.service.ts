import { Injectable } from '@nestjs/common';
import { TeamStatsRepository } from './team-stats.repository';

interface TeamScore {
  runs: number;
  overs: number;
}

@Injectable()
export class TeamStatsService {
  constructor(private readonly repository: TeamStatsRepository) {}

  async updateTeamStats(
    seasonId: string,
    tournamentId: string,
    teamId: string,
    scored: TeamScore,
    conceded: TeamScore,
    isWinner: boolean,
  ) {
    let stats = await this.repository.findBySeasonAndTeam(seasonId, teamId);

    if (!stats) {
      stats = await this.repository.create({
        seasonId,
        tournamentId,
        teamId,
      });
    }

    const matchesPlayed = stats.matchesPlayed + 1;
    const wins = stats.wins + (isWinner ? 1 : 0);
    const losses = stats.losses + (!isWinner ? 1 : 0);
    const points = stats.points + (isWinner ? 2 : 0);

    const runsScored = stats.runsScored + scored.runs;
    const runsConceded = stats.runsConceded + conceded.runs;

    const oversFaced = stats.oversFaced + scored.overs;
    const oversBowled = stats.oversBowled + conceded.overs;

    const netRunRate = this.calculateNRR(
      runsScored,
      oversFaced,
      runsConceded,
      oversBowled,
    );

    return this.repository.update(stats.id, {
      matchesPlayed,
      wins,
      losses,
      points,
      runsScored,
      runsConceded,
      oversFaced,
      oversBowled,
      netRunRate,
    });
  }

  private calculateNRR(
    runsScored: number,
    oversFaced: number,
    runsConceded: number,
    oversBowled: number,
  ) {
    if (!oversFaced || !oversBowled) return 0;

    const runRateFor = runsScored / oversFaced;
    const runRateAgainst = runsConceded / oversBowled;

    return Number((runRateFor - runRateAgainst).toFixed(3));
  }

  getSeasonTeams(seasonId: string) {
    return this.repository.getAllBySeason(seasonId);
  }
}
