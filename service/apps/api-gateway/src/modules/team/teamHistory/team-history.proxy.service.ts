import { CreateTeamHistoryDto, TeamHistoryFilterDto } from '@libs/common';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class TeamHistoryProxyService {
  constructor(
    @Inject('TEAM_SERVICE')
    private readonly client: ClientProxy,
  ) {}

  create(dto: CreateTeamHistoryDto) {
    return firstValueFrom(this.client.send('teamHistory.create', dto));
  }

  findAll(filter: TeamHistoryFilterDto) {
    return firstValueFrom(this.client.send('teamHistory.findAll', filter));
  }

  findByTeam(teamId: string) {
    return firstValueFrom(this.client.send('teamHistory.findByTeam', teamId));
  }
}
