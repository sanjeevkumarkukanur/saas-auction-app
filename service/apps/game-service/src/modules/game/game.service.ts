import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { GameRepository } from './game.repository';
import { CreateGameDto, UpdateGameDto, GameFilterDto } from '@libs/common';

@Injectable()
export class GameService {
  constructor(private readonly repo: GameRepository) {}

  async create(dto: CreateGameDto) {
    const exists = await this.repo.findByKey(dto.key);

    if (exists) {
      throw new BadRequestException('Game key already exists');
    }

    return this.repo.create(dto);
  }

  findAll(filter: GameFilterDto) {
    return this.repo.findAll(filter);
  }

  async findOne(id: string) {
    const game = await this.repo.findById(id);

    if (!game) {
      throw new NotFoundException('Game not found');
    }

    return game;
  }

  async update(id: string, dto: UpdateGameDto) {
    await this.findOne(id);
    return this.repo.update(id, dto);
  }
}
