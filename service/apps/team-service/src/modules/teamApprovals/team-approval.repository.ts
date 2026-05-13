import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma, TeamApproval } from '@prisma/teams-client';
import { TeamApprovalFilterDto } from '@libs/common';

@Injectable()
export class TeamApprovalRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.TeamApprovalUncheckedCreateInput) {
    return this.prisma.teamApproval.create({ data });
  }

  findAll(filter: TeamApprovalFilterDto): Promise<TeamApproval[]> {
    return this.prisma.teamApproval.findMany({
      where: {
        ...(filter.tenantId && { tenantId: filter.tenantId }),
        ...(filter.teamId && { teamId: filter.teamId }),
        ...(filter.status && { status: filter.status as any }),
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  findById(id: string): Promise<TeamApproval | null> {
    return this.prisma.teamApproval.findUnique({
      where: { id },
    });
  }

  update(id: string, data: Prisma.TeamApprovalUncheckedUpdateInput) {
    return this.prisma.teamApproval.update({
      where: { id },
      data,
    });
  }
}
