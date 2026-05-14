import { Injectable } from '@nestjs/common';
import {
  CategoryFilterDto,
  CreateCategoryDto,
  UpdateCategoryDto,
} from '@libs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class CategoryRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateCategoryDto) {
    return this.prisma.gameCategory.create({ data });
  }

  findAll(filter: CategoryFilterDto) {
    return this.prisma.gameCategory.findMany({
      where: {
        ...(filter.gameId && { gameId: filter.gameId }),
        ...(filter.isActive !== undefined && { isActive: filter.isActive }),
      },
    });
  }

  findById(id: string) {
    return this.prisma.gameCategory.findUnique({
      where: { id },
    });
  }

  findByKey(gameId: string, key: string) {
    return this.prisma.gameCategory.findUnique({
      where: {
        gameId_key: { gameId, key },
      },
    });
  }

  update(id: string, data: UpdateCategoryDto) {
    return this.prisma.gameCategory.update({
      where: { id },
      data,
    });
  }
}
