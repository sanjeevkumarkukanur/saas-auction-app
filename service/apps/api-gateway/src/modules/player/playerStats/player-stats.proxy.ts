import { CreatePlayerStatsDto, UpdatePlayerStatsDto } from '@libs/common';
import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class PlayerStatsProxy {
  constructor(@Inject('PLAYER_SERVICE') private readonly client: ClientProxy) {}

  create(dto: CreatePlayerStatsDto) {
    return firstValueFrom(this.client.send('playerStats.create', dto));
  }

  findByPlayerSeason(playerSeasonId: string) {
    return firstValueFrom(
      this.client.send('playerStats.findByPlayerSeason', playerSeasonId),
    );
  }

  update(id: string, dto: UpdatePlayerStatsDto) {
    return firstValueFrom(
      this.client.send('playerStats.update', {
        id,
        dto,
      }),
    );
  }

  delete(id: string) {
    return firstValueFrom(this.client.send('playerStats.delete', id));
  }
}
