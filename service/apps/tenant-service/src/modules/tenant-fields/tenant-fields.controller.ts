import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { TenantFieldsService } from './tenant-fields.service';
import { UpdateTenantFieldDto } from '@libs/common';

@Controller()
export class TenantFieldsController {
  constructor(private readonly service: TenantFieldsService) {
    console.log('🔥 TenantFieldsMsController LOADED');
  }

  @MessagePattern({ cmd: 'tenantFields.getBySection' })
  getBySection(data: { tenantSectionId: string }) {
    return this.service.getBySection(data.tenantSectionId);
  }

  @MessagePattern({ cmd: 'tenantFields.update' })
  update(data: { id: string; dto: UpdateTenantFieldDto }) {
    return this.service.update(data.id, data.dto);
  }
}
