import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { TenantSectionsService } from './tenant-sections.service';
import { UpdateTenantSectionDto } from '@libs/common';

@Controller()
export class TenantSectionsController {
  constructor(private readonly service: TenantSectionsService) {
    console.log('🔥 TenantSectionsMsController LOADED');
  }

  @MessagePattern({ cmd: 'tenantSections.getByPage' })
  getByPage(data: { tenantPageId: string }) {
    return this.service.getByPage(data.tenantPageId);
  }

  @MessagePattern({ cmd: 'tenantSections.update' })
  update(data: { id: string; dto: UpdateTenantSectionDto }) {
    return this.service.update(data.id, data.dto);
  }
}
