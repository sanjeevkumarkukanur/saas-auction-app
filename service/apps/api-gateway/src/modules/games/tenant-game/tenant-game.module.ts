import { Module } from '@nestjs/common';
import { TenantGameController } from './tenant-game.controller';
import { TenantGameProxyService } from './tenant-game.proxy.service';
import { GamesClientModule } from '@libs/common';

@Module({
  imports: [GamesClientModule],
  controllers: [TenantGameController],
  providers: [TenantGameProxyService],
})
export class TenantGameModule {}
