import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class GroupRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: { name: string; stageId: string }) {
    return this.prisma.group.create({
      data: {
        name: data.name,
        stage: {
          connect: { id: data.stageId },
        },
      },
    });
  }

  findByStage(stageId: string) {
    return this.prisma.group.findMany({
      where: { stageId },
      include: {
        teams: true,
        fixtures: true,
      },
    });
  }

  findById(id: string) {
    return this.prisma.group.findUnique({
      where: { id },
      include: {
        teams: true,
        fixtures: true,
      },
    });
  }

  addTeam(groupId: string, teamId: string) {
    return this.prisma.groupTeam.create({
      data: {
        groupId,
        teamId,
      },
    });
  }

  update(id: string, data: any) {
    return this.prisma.group.update({
      where: { id },
      data,
    });
  }

  delete(id: string) {
    return this.prisma.group.delete({
      where: { id },
    });
  }
}
