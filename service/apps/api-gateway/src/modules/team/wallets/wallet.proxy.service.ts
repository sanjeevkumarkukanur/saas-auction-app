import {
  CreateWalletDto,
  DeductWalletDto,
  ReleaseWalletDto,
  ReserveWalletDto,
} from '@libs/common';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class WalletProxyService {
  constructor(
    @Inject('TEAM_SERVICE')
    private readonly client: ClientProxy,
  ) {}

  create(dto: CreateWalletDto) {
    return firstValueFrom(this.client.send('wallet.create', dto));
  }

  get(seasonTeamId: string) {
    return firstValueFrom(this.client.send('wallet.get', seasonTeamId));
  }

  reserve(dto: ReserveWalletDto) {
    return firstValueFrom(this.client.send('wallet.reserve', dto));
  }

  release(dto: ReleaseWalletDto) {
    return firstValueFrom(this.client.send('wallet.release', dto));
  }

  deduct(dto: DeductWalletDto) {
    return firstValueFrom(this.client.send('wallet.deduct', dto));
  }
}
