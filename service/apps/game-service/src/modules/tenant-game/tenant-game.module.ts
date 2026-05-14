import { Module } from '@nestjs/common';
import { TenantGameController } from './tenant-game.controller';
import { TenantGameRepository } from './tenant-game.repository';
import { TenantGameService } from './tenant-game.service';

@Module({
  controllers: [TenantGameController],
  providers: [TenantGameService, TenantGameRepository],
  exports: [TenantGameService],
})
export class TenantGameModule {}
