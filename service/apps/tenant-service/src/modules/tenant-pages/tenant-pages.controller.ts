import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { TenantPagesService } from './tenant-pages.service';
import { UpdateTenantPageDto } from '@libs/common';

@Controller()
export class TenantPagesController {
  constructor(private readonly service: TenantPagesService) {
    console.log('🔥 TenantPagesMsController LOADED');
  }

  @MessagePattern({ cmd: 'tenantPages.getByTenant' })
  getByTenant(data: { tenantId: string }) {
    return this.service.getByTenant(data.tenantId);
  }

  @MessagePattern({ cmd: 'tenantPages.getOne' })
  getOne(data: { id: string }) {
    return this.service.getOne(data.id);
  }

  @MessagePattern({ cmd: 'tenantPages.update' })
  update(data: { id: string; dto: UpdateTenantPageDto }) {
    return this.service.update(data.id, data.dto);
  }
}
