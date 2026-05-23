import { CreatePlayerSeasonDto, UpdatePlayerSeasonDto } from '@libs/common';
import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class PlayerSeasonProxy {
  constructor(@Inject('PLAYER_SERVICE') private readonly client: ClientProxy) {}

  create(dto: CreatePlayerSeasonDto) {
    return firstValueFrom(this.client.send('playerSeason.create', dto));
  }

  findBySeason(seasonId: string) {
    return firstValueFrom(
      this.client.send('playerSeason.findBySeason', seasonId),
    );
  }

  update(id: string, dto: UpdatePlayerSeasonDto) {
    return firstValueFrom(
      this.client.send('playerSeason.update', {
        id,
        dto,
      }),
    );
  }

  updateStatus(id: string, status: string) {
    return firstValueFrom(
      this.client.send('playerSeason.updateStatus', {
        id,
        status,
      }),
    );
  }

  sell(id: string, soldPrice: number) {
    return firstValueFrom(
      this.client.send('playerSeason.sell', {
        id,
        soldPrice,
      }),
    );
  }

  delete(id: string) {
    return firstValueFrom(this.client.send('playerSeason.delete', id));
  }
}
