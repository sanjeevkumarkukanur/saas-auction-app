import { CreatePlayerLeagueDto } from '@libs/common';
import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class PlayerLeagueProxy {
  constructor(@Inject('PLAYER_SERVICE') private readonly client: ClientProxy) {}

  create(dto: CreatePlayerLeagueDto) {
    return firstValueFrom(this.client.send('playerLeague.create', dto));
  }

  findByPlayer(playerId: string) {
    return firstValueFrom(
      this.client.send('playerLeague.findByPlayer', playerId),
    );
  }

  delete(id: string) {
    return firstValueFrom(this.client.send('playerLeague.delete', id));
  }
}
