import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import {
  CreateFormatDto,
  FormatFilterDto,
  UpdateFormatDto,
} from '@libs/common';

@Injectable()
export class FormatRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateFormatDto) {
    return this.prisma.gameFormat.create({ data });
  }

  findAll(filter: FormatFilterDto) {
    return this.prisma.gameFormat.findMany({
      where: {
        ...(filter.gameId && { gameId: filter.gameId }),
        ...(filter.isActive !== undefined && { isActive: filter.isActive }),
      },
    });
  }

  findById(id: string) {
    return this.prisma.gameFormat.findUnique({
      where: { id },
    });
  }

  findByKey(gameId: string, key: string) {
    return this.prisma.gameFormat.findUnique({
      where: {
        gameId_key: { gameId, key },
      },
    });
  }

  update(id: string, data: UpdateFormatDto) {
    return this.prisma.gameFormat.update({
      where: { id },
      data,
    });
  }
}
