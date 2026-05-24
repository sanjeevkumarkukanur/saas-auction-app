import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigRepository } from './config.repository';
import { CreateConfigDto, UpdateConfigDto } from '@libs/common';

@Injectable()
export class ConfigService {
  constructor(private readonly repository: ConfigRepository) {}

  create(dto: CreateConfigDto) {
    return this.repository.create({
      format: dto.format,
      totalTeams: dto.totalTeams,
      tournament: {
        connect: { id: dto.tournamentId },
      },
    });
  }

  async find(tournamentId: string) {
    const config = await this.repository.findByTournament(tournamentId);

    if (!config) {
      throw new NotFoundException('Config not found');
    }

    return config;
  }

  async update(tournamentId: string, dto: UpdateConfigDto) {
    await this.find(tournamentId);

    return this.repository.update(tournamentId, {
      format: dto.format,
      totalTeams: dto.totalTeams,
    });
  }

  async remove(tournamentId: string) {
    await this.find(tournamentId);
    return this.repository.delete(tournamentId);
  }
}
