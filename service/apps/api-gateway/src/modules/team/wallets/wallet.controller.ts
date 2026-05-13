import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  CreateWalletDto,
  DeductWalletDto,
  ReleaseWalletDto,
  ReserveWalletDto,
} from '@libs/common';
import { WalletProxyService } from './wallet.proxy.service';

@Controller('wallets')
export class WalletController {
  constructor(private readonly proxy: WalletProxyService) {}

  // ✅ Create wallet
  @Post()
  create(@Body() dto: CreateWalletDto) {
    return this.proxy.create(dto);
  }

  // ✅ Get wallet
  @Get(':seasonTeamId')
  get(@Param('seasonTeamId') seasonTeamId: string) {
    return this.proxy.get(seasonTeamId);
  }

  // ✅ Reserve
  @Post('reserve')
  reserve(@Body() dto: ReserveWalletDto) {
    return this.proxy.reserve(dto);
  }

  // ✅ Release
  @Post('release')
  release(@Body() dto: ReleaseWalletDto) {
    return this.proxy.release(dto);
  }

  // ✅ Deduct
  @Post('deduct')
  deduct(@Body() dto: DeductWalletDto) {
    return this.proxy.deduct(dto);
  }
}
