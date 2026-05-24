import { Injectable } from '@nestjs/common';
import { PlayerStatsRepository } from './player-stats.repository';

interface BattingInput {
  runs: number;
  balls: number;
}

interface BowlingInput {
  wickets: number;
  overs: number;
  runsConceded: number;
}

@Injectable()
export class PlayerStatsService {
  constructor(private readonly repository: PlayerStatsRepository) {}

  async updatePlayerStats(
    seasonId: string,
    playerId: string,
    teamId: string,
    batting?: BattingInput,
    bowling?: BowlingInput,
  ) {
    let stats = await this.repository.findBySeasonAndPlayer(seasonId, playerId);

    if (!stats) {
      stats = await this.repository.create({
        seasonId,
        playerId,
        teamId,
      });
    }

    const matches = stats.matches + 1;

    let totalRuns = stats.totalRuns;
    let totalWickets = stats.totalWickets;
    let highestScore = stats.highestScore;
    let strikeRate = stats.strikeRate;
    let economy = stats.economy;

    if (batting) {
      totalRuns += batting.runs;
      highestScore = Math.max(highestScore, batting.runs);

      const totalBalls =
        stats.totalRuns > 0 ? (stats.totalRuns / stats.strikeRate) * 100 : 0;

      const newBalls = totalBalls + batting.balls;

      strikeRate = newBalls
        ? Number(((totalRuns / newBalls) * 100).toFixed(2))
        : 0;
    }

    if (bowling) {
      totalWickets += bowling.wickets;

      const totalOvers =
        stats.totalWickets > 0 ? stats.totalWickets / stats.economy : 0;

      const newOvers = totalOvers + bowling.overs;

      economy = newOvers
        ? Number(
            ((stats.totalRuns + bowling.runsConceded) / newOvers).toFixed(2),
          )
        : 0;
    }

    return this.repository.update(stats.id, {
      matches,
      totalRuns,
      totalWickets,
      highestScore,
      strikeRate,
      economy,
    });
  }

  getTopRunScorers(seasonId: string, limit = 5) {
    return this.repository.getTopRunScorers(seasonId, limit);
  }

  getTopWicketTakers(seasonId: string, limit = 5) {
    return this.repository.getTopWicketTakers(seasonId, limit);
  }
}
