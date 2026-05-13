import { Module } from '@nestjs/common';
import { TenantService } from './tenants.service';
import { TenantController } from './tenants.controller';
import { TenantRepository } from './tenants.repository';
import { PrismaModule } from '../../prisma/prisma.module';
import { BillingClientModule, PlatformClientModule } from '@libs/common';

@Module({
  imports: [PrismaModule, PlatformClientModule, BillingClientModule],
  controllers: [TenantController],
  providers: [TenantService, TenantRepository],
  exports: [TenantService, TenantRepository],
})
export class TenantsModule {}
