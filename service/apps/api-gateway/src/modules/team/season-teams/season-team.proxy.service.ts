import {
  CreateSeasonTeamDto,
  SeasonTeamFilterDto,
  UpdateSeasonTeamDto,
} from '@libs/common';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class SeasonTeamProxyService {
  constructor(
    @Inject('TEAM_SERVICE')
    private readonly teamClient: ClientProxy,
  ) {}

  create(dto: CreateSeasonTeamDto) {
    return firstValueFrom(this.teamClient.send('seasonTeam.create', dto));
  }

  findAll(query: SeasonTeamFilterDto) {
    return firstValueFrom(this.teamClient.send('seasonTeam.findAll', query));
  }

  findById(id: string) {
    return firstValueFrom(this.teamClient.send('seasonTeam.findById', id));
  }

  update(id: string, dto: UpdateSeasonTeamDto) {
    return firstValueFrom(
      this.teamClient.send('seasonTeam.update', {
        id,
        dto,
      }),
    );
  }

  delete(id: string) {
    return firstValueFrom(this.teamClient.send('seasonTeam.delete', id));
  }
}
