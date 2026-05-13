import { RedisModule } from '@libs/redis';
import { Module } from '@nestjs/common';
import { PagesModule } from './modules/pages/pages.module';
import { SectionsModule } from './modules/sections/sections.module';
import { FieldsModule } from './modules/fields/fields.module';
import { TenantConfigModule } from './modules/tenant-config/tenant-config.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: 'apps/platform-service/.env',
    }),
    RedisModule,
    PagesModule,
    SectionsModule,
    FieldsModule,
    TenantConfigModule,
  ],
})
export class PlatformServiceModule {}
