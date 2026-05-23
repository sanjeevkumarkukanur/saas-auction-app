import { Module } from '@nestjs/common';
import { TenantPlayerController } from './tenant-player.controller';
import { TenantPlayerProxy } from './tenant-player.proxy';
import { PlayersClientModule } from '@libs/common';

@Module({
  imports: [PlayersClientModule],
  controllers: [TenantPlayerController],
  providers: [TenantPlayerProxy],
})
export class TenantPlayerModule {}
