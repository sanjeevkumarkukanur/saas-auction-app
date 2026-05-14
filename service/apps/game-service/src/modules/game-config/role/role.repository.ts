import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateRoleDto, RoleFilterDto, UpdateRoleDto } from '@libs/common';

@Injectable()
export class RoleRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateRoleDto) {
    return this.prisma.gameRole.create({ data });
  }

  findAll(filter: RoleFilterDto) {
    return this.prisma.gameRole.findMany({
      where: {
        ...(filter.gameId && { gameId: filter.gameId }),
        ...(filter.isActive !== undefined && { isActive: filter.isActive }),
      },
    });
  }

  findById(id: string) {
    return this.prisma.gameRole.findUnique({
      where: { id },
    });
  }

  findByKey(gameId: string, key: string) {
    return this.prisma.gameRole.findUnique({
      where: {
        gameId_key: { gameId, key },
      },
    });
  }

  update(id: string, data: UpdateRoleDto) {
    return this.prisma.gameRole.update({
      where: { id },
      data,
    });
  }
}
