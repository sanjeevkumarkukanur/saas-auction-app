import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { CreateGameDto, UpdateGameDto, GameFilterDto } from '@libs/common';

@Injectable()
export class GameProxy {
  constructor(@Inject('GAME_SERVICE') private readonly client: ClientProxy) {}

  async createGame(data: CreateGameDto) {
    return lastValueFrom(this.client.send('game.create', data));
  }

  async getGames(filter: GameFilterDto) {
    return lastValueFrom(this.client.send('game.findAll', filter));
  }

  async getGameById(id: string) {
    return lastValueFrom(this.client.send('game.findOne', id));
  }

  async updateGame(id: string, data: UpdateGameDto) {
    return lastValueFrom(this.client.send('game.update', { id, data }));
  }
}
