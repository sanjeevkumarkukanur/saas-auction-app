import { Module } from '@nestjs/common';
import { TenantController } from './tenant.controller';
import { TenantProxy } from './tenant.proxy';
import { TenantsClientModule } from '@libs/common';

@Module({
  imports: [TenantsClientModule],
  controllers: [TenantController],
  providers: [TenantProxy],
  exports: [TenantProxy],
})
export class TenantModule {}
