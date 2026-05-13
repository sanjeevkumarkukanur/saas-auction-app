import { CreateTeamStatDto, TeamStatFilterDto } from '@libs/common';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class TeamStatProxyService {
  constructor(
    @Inject('TEAM_SERVICE')
    private readonly client: ClientProxy,
  ) {}

  create(dto: CreateTeamStatDto) {
    return firstValueFrom(this.client.send('teamStat.create', dto));
  }

  updateOnBuy(seasonTeamId: string, amount: number) {
    return firstValueFrom(
      this.client.send('teamStat.updateOnBuy', {
        seasonTeamId,
        amount,
      }),
    );
  }

  incrementUnsold(seasonTeamId: string) {
    return firstValueFrom(this.client.send('teamStat.unsold', seasonTeamId));
  }

  findAll(filter: TeamStatFilterDto) {
    return firstValueFrom(this.client.send('teamStat.findAll', filter));
  }

  findOne(seasonTeamId: string) {
    return firstValueFrom(this.client.send('teamStat.findOne', seasonTeamId));
  }
}
