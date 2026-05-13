import { Module } from '@nestjs/common';
import { TenantFieldsController } from './tenant-fields.controller';
import { TenantFieldsService } from './tenant-fields.service';
import { TenantFieldsRepository } from './tenant-fields.repository';
import { PrismaModule } from '../prisma/prisma.module';
import { TenantFieldsMsController } from './tenant-fields.ms.controller';

@Module({
  imports: [PrismaModule],
  controllers: [TenantFieldsController, TenantFieldsMsController],
  providers: [TenantFieldsService, TenantFieldsRepository],
  exports: [TenantFieldsRepository],
})
export class TenantFieldsModule {}
