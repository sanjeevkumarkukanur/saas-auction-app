import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TenantPlayerService } from './tenant-player.service';
import { CreateTenantPlayerDto, UpdateTenantPlayerDto } from '@app/common';

@Controller()
export class TenantPlayerMsController {
  constructor(private readonly tenantPlayerService: TenantPlayerService) {}

  @MessagePattern('tenantPlayer.create')
  create(@Payload() dto: CreateTenantPlayerDto) {
    return this.tenantPlayerService.create(dto);
  }

  @MessagePattern('tenantPlayer.findByTenant')
  findByTenant(@Payload() tenantId: string) {
    return this.tenantPlayerService.findByTenant(tenantId);
  }

  @MessagePattern('tenantPlayer.update')
  update(
    @Payload()
    data: {
      id: string;
      dto: UpdateTenantPlayerDto;
    },
  ) {
    return this.tenantPlayerService.update(data.id, data.dto);
  }

  @MessagePattern('tenantPlayer.delete')
  remove(@Payload() id: string) {
    return this.tenantPlayerService.remove(id);
  }
}
