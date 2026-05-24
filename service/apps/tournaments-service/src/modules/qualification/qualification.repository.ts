import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class QualificationRepository {
  constructor(private readonly prisma: PrismaService) {}

  getGroups(stageId: string) {
    return this.prisma.group.findMany({
      where: { stageId },
      include: {
        teams: true,
      },
    });
  }

  getGroupStats(groupId: string) {
    return this.prisma.groupStats.findMany({
      where: { groupId },
      orderBy: [{ points: 'desc' }, { netRunRate: 'desc' }],
    });
  }

  addTeamToGroup(groupId: string, teamId: string) {
    return this.prisma.groupTeam.create({
      data: {
        groupId,
        teamId,
      },
    });
  }

  getTargetGroups(stageId: string) {
    return this.prisma.group.findMany({
      where: { stageId },
    });
  }
}
