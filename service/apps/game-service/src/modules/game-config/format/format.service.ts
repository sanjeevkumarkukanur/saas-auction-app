import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { FormatRepository } from './format.repository';

import {
  CreateFormatDto,
  FormatFilterDto,
  UpdateFormatDto,
} from '@libs/common';

@Injectable()
export class FormatService {
  constructor(private readonly repo: FormatRepository) {}

  async create(dto: CreateFormatDto) {
    const exists = await this.repo.findByKey(dto.gameId, dto.key);

    if (exists) {
      throw new BadRequestException('Format key already exists for game');
    }

    return this.repo.create(dto);
  }

  findAll(filter: FormatFilterDto) {
    return this.repo.findAll(filter);
  }

  async findOne(id: string) {
    const data = await this.repo.findById(id);

    if (!data) {
      throw new NotFoundException('Format not found');
    }

    return data;
  }

  async update(id: string, dto: UpdateFormatDto) {
    await this.findOne(id);
    return this.repo.update(id, dto);
  }
}
