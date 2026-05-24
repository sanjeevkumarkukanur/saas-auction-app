import { Injectable } from '@nestjs/common';
import { QualificationRepository } from './qualification.repository';
import { QualifyStageDto } from '@app/common';

@Injectable()
export class QualificationService {
  constructor(private readonly repository: QualificationRepository) {}

  async qualify(dto: QualifyStageDto) {
    const groups = await this.repository.getGroups(dto.fromStageId);

    const targetGroups = await this.repository.getTargetGroups(dto.toStageId);

    if (!targetGroups.length) {
      throw new Error('Target stage groups not found');
    }

    const qualifiedTeams: string[] = [];

    for (const group of groups) {
      const standings = await this.repository.getGroupStats(group.id);

      const topTeams = standings.slice(0, dto.topN);

      for (const team of topTeams) {
        qualifiedTeams.push(team.teamId);
      }
    }

    let groupIndex = 0;

    for (const teamId of qualifiedTeams) {
      const group = targetGroups[groupIndex % targetGroups.length];

      await this.repository.addTeamToGroup(group.id, teamId);

      groupIndex++;
    }

    return {
      message: 'Qualification completed',
      teamsQualified: qualifiedTeams.length,
    };
  }
}
