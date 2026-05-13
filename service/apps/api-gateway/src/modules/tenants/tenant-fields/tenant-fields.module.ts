import { Module } from '@nestjs/common';
import { TenantFieldsController } from './tenant-fields.controller';
import { TenantFieldsProxy } from './tenant-fields.proxy';
import { TenantsClientModule } from '@libs/common';

@Module({
  imports: [TenantsClientModule],
  controllers: [TenantFieldsController],
  providers: [TenantFieldsProxy],
})
export class TenantFieldsModule {}
