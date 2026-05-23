import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class PlayerProxy {
  constructor(@Inject('PLAYER_SERVICE') private readonly client: ClientProxy) {}

  create(data: any) {
    return firstValueFrom(this.client.send('player.create', data));
  }

  findAll(query: any) {
    return firstValueFrom(this.client.send('player.findAll', query));
  }

  findOne(id: string) {
    return firstValueFrom(this.client.send('player.findOne', id));
  }

  update(id: string, data: any) {
    return firstValueFrom(this.client.send('player.update', { id, data }));
  }

  delete(id: string) {
    return firstValueFrom(this.client.send('player.delete', id));
  }
}
