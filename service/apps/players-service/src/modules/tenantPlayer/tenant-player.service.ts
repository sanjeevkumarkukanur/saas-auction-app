import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { TenantPlayerRepository } from './tenant-player.repository';
import { CreateTenantPlayerDto, UpdateTenantPlayerDto } from '@app/common';

@Injectable()
export class TenantPlayerService {
  constructor(private readonly tenantPlayerRepo: TenantPlayerRepository) {}

  async create(dto: CreateTenantPlayerDto) {
    const exists = await this.tenantPlayerRepo.findOne(
      dto.tenantId,
      dto.playerId,
    );

    if (exists) {
      throw new ConflictException('Player already assigned to tenant');
    }

    return this.tenantPlayerRepo.create(dto);
  }

  async findByTenant(tenantId: string) {
    return this.tenantPlayerRepo.findByTenant(tenantId);
  }

  async update(id: string, dto: UpdateTenantPlayerDto) {
    return this.tenantPlayerRepo.update(id, dto);
  }

  async remove(id: string) {
    const record = await this.tenantPlayerRepo.update(id, {}); // check exists
    if (!record) throw new NotFoundException('Tenant player not found');

    return this.tenantPlayerRepo.delete(id);
  }
}
