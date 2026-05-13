import { Module } from '@nestjs/common';
import { TenantModule } from './tenant/tenant.module';
import { TenantFieldsModule } from './tenant-fields/tenant-fields.module';
import { TenantPagesModule } from './tenant-pages/tenant-pages.module';
import { TenantSectionsModule } from './tenant-sections/tenant-sections.module';

@Module({
  imports: [
    TenantModule,
    TenantPagesModule,
    TenantFieldsModule,
    TenantSectionsModule,
  ],
})
export class TenantsModule {}
