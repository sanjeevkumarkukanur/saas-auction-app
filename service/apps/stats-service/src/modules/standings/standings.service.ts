import { Injectable } from '@nestjs/common';
import { StandingsRepository } from './standings.repository';
import { PrismaService } from '../prisma/prisma.service';
import {
  MatchCompletedPayload,
  TeamScorePayload,
} from './dto/match-completed.payload';

@Injectable()
export class StandingsService {
  constructor(
    private readonly repository: StandingsRepository,
    private readonly prisma: PrismaService,
  ) {}

  async updateFromMatch(payload: MatchCompletedPayload) {
    const {
      seasonId,
      tournamentId,
      teamA,
      teamB,
      winnerTeamId,
      teamAScore,
      teamBScore,
    } = payload;

    await this.processTeam(
      seasonId,
      tournamentId,
      teamA,
      teamAScore,
      teamBScore,
      winnerTeamId === teamA,
    );

    await this.processTeam(
      seasonId,
      tournamentId,
      teamB,
      teamBScore,
      teamAScore,
      winnerTeamId === teamB,
    );

    return { message: 'Standings updated' };
  }

  private async processTeam(
    seasonId: string,
    tournamentId: string,
    teamId: string,
    scored: TeamScorePayload,
    conceded: TeamScorePayload,
    isWinner: boolean,
  ) {
    let stats = await this.repository.findTeamStats(seasonId, teamId);

    if (!stats) {
      stats = await this.repository.createTeamStats({
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

    await this.repository.updateTeamStats(stats.id, {
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

  getStandings(seasonId: string) {
    return this.repository.getStandings(seasonId);
  }
}
