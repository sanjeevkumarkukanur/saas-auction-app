import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { TenantGameRepository } from './tenant-game.repository';
import {
  AssignGameDto,
  TenantGameFilterDto,
  UpdateTenantGameDto,
} from '@libs/common';
@Injectable()
export class TenantGameService {
  constructor(private readonly repo: TenantGameRepository) {}

  async assignGame(dto: AssignGameDto) {
    const { tenantId, gameId, gameIds } = dto;

    const ids = gameIds ?? (gameId ? [gameId] : []);

    if (!ids.length) {
      throw new BadRequestException('No gameId(s) provided');
    }

    return Promise.all(
      ids.map((gid) =>
        this.repo.create({
          tenantId,
          gameId: gid,
        }),
      ),
    );
  }

  async findAll(filter: TenantGameFilterDto) {
    const data = await this.repo.findAll(filter);

    return data.map((item) => ({
      ...item,
      game: item.game ? item.game : {}, // 🔥 convert
    }));
  }

  async findOne(id: string) {
    const data = await this.repo.findById(id);

    if (!data) {
      throw new NotFoundException('Tenant game not found');
    }

    return data;
  }

  async update(id: string, dto: UpdateTenantGameDto) {
    await this.findOne(id);
    return this.repo.update(id, dto);
  }
}
