import { Module } from '@nestjs/common';
import { TenantPlayerService } from './tenant-player.service';
import { TenantPlayerRepository } from './tenant-player.repository';
import { TenantPlayerController } from './tenant-player.controller';
import { TenantPlayerMsController } from './tenant-player.ms.controller';

@Module({
  controllers: [TenantPlayerController, TenantPlayerMsController],
  providers: [TenantPlayerService, TenantPlayerRepository],
  exports: [TenantPlayerService],
})
export class TenantPlayerModule {}
