import { Module } from '@nestjs/common';
import { TenantConfigController } from './tenant-config.controller';
import { TenantConfigProxy } from './tenant-config.proxy';
import { PlatformClientModule } from '@libs/common';

@Module({
  imports: [PlatformClientModule],
  controllers: [TenantConfigController],
  providers: [TenantConfigProxy],
})
export class TenantConfigModule {}
