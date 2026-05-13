import { CreateTeamDto, TeamFilterDto, UpdateTeamDto } from '@libs/common';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class TeamProxyService {
  constructor(
    @Inject('TEAM_SERVICE')
    private readonly teamClient: ClientProxy,
  ) {}

  create(dto: CreateTeamDto) {
    return firstValueFrom(this.teamClient.send('team.create', dto));
  }

  findAll(query: Record<string, TeamFilterDto>) {
    return firstValueFrom(this.teamClient.send('team.findAll', query));
  }

  findById(id: string) {
    return firstValueFrom(this.teamClient.send('team.findById', id));
  }

  update(id: string, dto: Record<string, UpdateTeamDto>) {
    return firstValueFrom(this.teamClient.send('team.update', { id, ...dto }));
  }

  delete(id: string) {
    return firstValueFrom(this.teamClient.send('team.delete', id));
  }
}
