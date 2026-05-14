import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { RuleRepository } from './rule.repository';
import { CreateRuleDto, RuleFilterDto, UpdateRuleDto } from '@libs/common';

@Injectable()
export class RuleService {
  constructor(private readonly repo: RuleRepository) {}

  async create(dto: CreateRuleDto) {
    const exists = await this.repo.findByKey(dto.gameId, dto.key);

    if (exists) {
      throw new BadRequestException('Rule key already exists for game');
    }

    return this.repo.create(dto);
  }

  findAll(filter: RuleFilterDto) {
    return this.repo.findAll(filter);
  }

  async findOne(id: string) {
    const data = await this.repo.findById(id);

    if (!data) {
      throw new NotFoundException('Rule not found');
    }

    return data;
  }

  async update(id: string, dto: UpdateRuleDto) {
    await this.findOne(id);
    return this.repo.update(id, dto);
  }
}
