import { Inject, Injectable } from '@nestjs/common';

import type { ClientProxy } from '@nestjs/microservices';

import {
  CreateLeagueDto,
  LeagueFilterDto,
  SERVICES,
  UpdateLeagueDto,
} from '@libs/common';
import { rpcCall } from '@libs/auth';

@Injectable()
export class LeagueProxy {
  constructor(
    @Inject(SERVICES.LEAGUE_SERVICE)
    private readonly leagueClient: ClientProxy,
  ) {}

  create(data: CreateLeagueDto) {
    return rpcCall(this.leagueClient, { cmd: 'league.create' }, data);
  }

  findAll(filter: LeagueFilterDto) {
    return rpcCall(this.leagueClient, { cmd: 'league.findAll' }, filter);
  }

  findOne(id: string) {
    return rpcCall(this.leagueClient, { cmd: 'league.findOne' }, id);
  }

  update(id: string, dto: UpdateLeagueDto) {
    return rpcCall(
      this.leagueClient,
      { cmd: 'league.update' },
      {
        id,
        dto,
      },
    );
  }

  delete(id: string) {
    return rpcCall(this.leagueClient, { cmd: 'league.delete' }, id);
  }
}
