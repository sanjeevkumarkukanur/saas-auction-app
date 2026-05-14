import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { RoleRepository } from './role.repository';
import { CreateRoleDto, RoleFilterDto, UpdateRoleDto } from '@libs/common';

@Injectable()
export class RoleService {
  constructor(private readonly repo: RoleRepository) {}

  async create(dto: CreateRoleDto) {
    const exists = await this.repo.findByKey(dto.gameId, dto.key);

    if (exists) {
      throw new BadRequestException('Role key already exists for game');
    }

    return this.repo.create(dto);
  }

  findAll(filter: RoleFilterDto) {
    return this.repo.findAll(filter);
  }

  async findOne(id: string) {
    const data = await this.repo.findById(id);

    if (!data) {
      throw new NotFoundException('Role not found');
    }

    return data;
  }

  async update(id: string, dto: UpdateRoleDto) {
    await this.findOne(id);
    return this.repo.update(id, dto);
  }
}
