import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { CategoryRepository } from './category.repository';
import {
  CategoryFilterDto,
  CreateCategoryDto,
  UpdateCategoryDto,
} from '@libs/common';

@Injectable()
export class CategoryService {
  constructor(private readonly repo: CategoryRepository) {}

  async create(dto: CreateCategoryDto) {
    const exists = await this.repo.findByKey(dto.gameId, dto.key);

    if (exists) {
      throw new BadRequestException('Category key already exists for game');
    }

    return this.repo.create(dto);
  }

  findAll(filter: CategoryFilterDto) {
    return this.repo.findAll(filter);
  }

  async findOne(id: string) {
    const data = await this.repo.findById(id);

    if (!data) {
      throw new NotFoundException('Category not found');
    }

    return data;
  }

  async update(id: string, dto: UpdateCategoryDto) {
    await this.findOne(id);
    return this.repo.update(id, dto);
  }
}
