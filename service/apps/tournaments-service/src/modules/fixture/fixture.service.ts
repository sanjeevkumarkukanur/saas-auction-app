import { Injectable } from '@nestjs/common';
import { FixtureRepository } from './fixture.repository';
import { GenerateFixtureDto } from '@libs/common';
import { PrismaService } from '../prisma/prisma.service';

type GeneratedMatch = {
  homeTeamId: string;
  awayTeamId: string;
  round: number;
};

@Injectable()
export class FixtureService {
  constructor(
    private readonly repository: FixtureRepository,
    private readonly prisma: PrismaService,
  ) {}

  async generateRoundRobin(dto: GenerateFixtureDto) {
    const teams = await this.getTeams(dto.groupId);

    const fixtures = this.roundRobin(teams);

    const data = fixtures.map((match, index) => ({
      stageId: dto.stageId,
      groupId: dto.groupId,
      homeTeamId: match.homeTeamId,
      awayTeamId: match.awayTeamId,
      round: match.round,
      matchNo: index + 1,
    }));

    await this.repository.createMany(data);

    return {
      message: 'Fixtures generated',
      totalMatches: data.length,
    };
  }

  private async getTeams(groupId?: string) {
    if (!groupId) return [];

    const groupTeams = await this.prisma.groupTeam.findMany({
      where: { groupId },
    });

    return groupTeams.map((t) => t.teamId);
  }

  private roundRobin(teams: string[]): GeneratedMatch[] {
    const result: GeneratedMatch[] = [];
    const teamCount = teams.length;

    if (teamCount < 2) return [];

    const rounds = teamCount - 1;

    const teamList = [...teams];

    for (let round = 0; round < rounds; round++) {
      for (let i = 0; i < teamCount / 2; i++) {
        const home = teamList[i];
        const away = teamList[teamCount - 1 - i];

        result.push({
          homeTeamId: home,
          awayTeamId: away,
          round: round + 1,
        });
      }

      teamList.splice(1, 0, teamList.pop()!);
    }

    return result;
  }

  findByStage(stageId: string) {
    return this.repository.findByStage(stageId);
  }

  findByGroup(groupId: string) {
    return this.repository.findByGroup(groupId);
  }
}
