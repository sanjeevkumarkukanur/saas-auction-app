import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateRuleDto, RuleFilterDto, UpdateRuleDto } from '@libs/common';

@Injectable()
export class RuleRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateRuleDto) {
    return this.prisma.gameRuleTemplate.create({ data });
  }

  findAll(filter: RuleFilterDto) {
    return this.prisma.gameRuleTemplate.findMany({
      where: {
        ...(filter.gameId && { gameId: filter.gameId }),
        ...(filter.isActive !== undefined && { isActive: filter.isActive }),
      },
    });
  }

  findById(id: string) {
    return this.prisma.gameRuleTemplate.findUnique({
      where: { id },
    });
  }

  findByKey(gameId: string, key: string) {
    return this.prisma.gameRuleTemplate.findUnique({
      where: {
        gameId_key: { gameId, key },
      },
    });
  }

  update(id: string, data: UpdateRuleDto) {
    return this.prisma.gameRuleTemplate.update({
      where: { id },
      data,
    });
  }
}
