import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { WalletService } from './wallet.service';
import {
  CreateWalletDto,
  DeductWalletDto,
  ReleaseWalletDto,
  ReserveWalletDto,
} from '@libs/common';

@Controller()
export class WalletController {
  constructor(private readonly service: WalletService) {}

  @MessagePattern('wallet.create')
  create(@Payload() dto: CreateWalletDto) {
    return this.service.create(dto);
  }

  @MessagePattern('wallet.reserve')
  reserve(@Payload() dto: ReserveWalletDto) {
    return this.service.reserve(dto.seasonTeamId, dto.amount);
  }

  @MessagePattern('wallet.release')
  release(@Payload() dto: ReleaseWalletDto) {
    return this.service.release(dto.seasonTeamId, dto.amount);
  }

  @MessagePattern('wallet.deduct')
  deduct(@Payload() dto: DeductWalletDto) {
    return this.service.deduct(dto.seasonTeamId, dto.amount);
  }

  @MessagePattern('wallet.get')
  get(@Payload() seasonTeamId: string) {
    return this.service.getWallet(seasonTeamId);
  }
}
