import { Injectable } from '@nestjs/common';
import { LeaderboardRepository } from './leaderboard.repository';
import { SeasonTeamStats } from '../../../prisma/generated/stats-client';
import { RedisService } from '../../../../../libs/redis';

export interface RankedTeam extends SeasonTeamStats {
  rank: number;
}

@Injectable()
export class LeaderboardService {
  constructor(
    private readonly repository: LeaderboardRepository,
    private readonly redis: RedisService,
  ) {}

  private getCacheKey(tournamentId: string): string {
    return `leaderboard:${tournamentId}`;
  }

  async rebuildLeaderboard(
    seasonId: string,
    tournamentId: string,
  ): Promise<RankedTeam[]> {
    const teams = await this.repository.getSeasonStats(seasonId);

    const ranked = this.rankTeams(teams);

    await this.repository.saveLeaderboard(tournamentId, ranked);

    await this.redis.setRaw(
      this.getCacheKey(tournamentId),
      JSON.stringify(ranked),
      3600,
    );

    return ranked;
  }

  private rankTeams(teams: SeasonTeamStats[]): RankedTeam[] {
    const sorted = [...teams].sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      if (b.netRunRate !== a.netRunRate) return b.netRunRate - a.netRunRate;
      return b.runsScored - a.runsScored;
    });

    return sorted.map((team, index) => ({
      ...team,
      rank: index + 1,
    }));
  }

  async getLeaderboard(tournamentId: string): Promise<RankedTeam[] | null> {
    const cacheKey = this.getCacheKey(tournamentId);

    // 1️⃣ Check Redis (raw)
    const cachedRaw = await this.redis.getRaw(cacheKey);

    if (cachedRaw) {
      return JSON.parse(cachedRaw) as RankedTeam[];
    }

    // 2️⃣ Fallback DB
    const dbCache = await this.repository.getLeaderboard(tournamentId);

    if (!dbCache?.payload) return null;

    // Prisma JSON → cast safely
    const payload = dbCache.payload as unknown as RankedTeam[];

    // 3️⃣ Warm Redis
    await this.redis.setRaw(cacheKey, JSON.stringify(payload), 3600);

    return payload;
  }
}
