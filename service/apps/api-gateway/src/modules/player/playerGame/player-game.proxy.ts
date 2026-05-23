import { CreatePlayerGameDto, UpdatePlayerGameDto } from '@libs/common';
import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class PlayerGameProxy {
  constructor(@Inject('PLAYER_SERVICE') private readonly client: ClientProxy) {}

  create(dto: CreatePlayerGameDto) {
    return firstValueFrom(this.client.send('playerGame.create', dto));
  }

  findByPlayer(playerId: string) {
    return firstValueFrom(
      this.client.send('playerGame.findByPlayer', playerId),
    );
  }

  update(id: string, dto: UpdatePlayerGameDto) {
    return firstValueFrom(
      this.client.send('playerGame.update', {
        id,
        dto,
      }),
    );
  }

  delete(id: string) {
    return firstValueFrom(this.client.send('playerGame.delete', id));
  }
}
