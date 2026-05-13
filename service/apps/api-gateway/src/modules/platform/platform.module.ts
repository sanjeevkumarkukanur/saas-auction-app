import { Module } from '@nestjs/common';
import { FieldsModule } from './fields/fields.module';
import { PagesModule } from './pages/pages.module';
import { PermissionsModule } from './permissions/permissions.module';
import { SectionsModule } from './sections/sections.module';
import { TenantConfigModule } from './tenant-config/tenant-config.module';

@Module({
  imports: [
    PagesModule,
    SectionsModule,
    FieldsModule,
    PermissionsModule,
    TenantConfigModule,
  ],
})
export class PlatformModule {}
