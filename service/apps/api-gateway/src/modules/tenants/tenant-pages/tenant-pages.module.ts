import { Module } from '@nestjs/common';
import { TenantPagesController } from './tenant-pages.controller';
import { TenantPagesProxy } from './tenant-pages.proxy';
import { TenantsClientModule } from '@libs/common';

@Module({
  imports: [TenantsClientModule],
  controllers: [TenantPagesController],
  providers: [TenantPagesProxy],
})
export class TenantPagesModule {}
