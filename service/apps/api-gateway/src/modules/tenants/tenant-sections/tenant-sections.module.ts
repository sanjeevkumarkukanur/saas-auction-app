import { Module } from '@nestjs/common';
import { TenantSectionsController } from './tenant-sections.controller';
import { TenantSectionsProxy } from './tenant-sections.proxy';
import { TenantsClientModule } from '@libs/common';

@Module({
  imports: [TenantsClientModule],
  controllers: [TenantSectionsController],
  providers: [TenantSectionsProxy],
})
export class TenantSectionsModule {}
