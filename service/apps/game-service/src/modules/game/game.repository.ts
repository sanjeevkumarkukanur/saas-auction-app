import { Injectable } from '@nestjs/common';
import { CreateGameDto, UpdateGameDto, GameFilterDto } from '@libs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class GameRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateGameDto) {
    return this.prisma.game.create({ data });
  }

  findAll(filter: GameFilterDto) {
    return this.prisma.game.findMany({
      where: {
        ...(filter.isActive !== undefined && { isActive: filter.isActive }),
      },
    });
  }

  findById(id: string) {
    return this.prisma.game.findUnique({ where: { id } });
  }

  findByKey(key: string) {
    return this.prisma.game.findUnique({ where: { key } });
  }

  update(id: string, data: UpdateGameDto) {
    return this.prisma.game.update({
      where: { id },
      data,
    });
  }
}
