import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TenantGameService } from './tenant-game.service';
import {
  AssignGameDto,
  TenantGameFilterDto,
  UpdateTenantGameDto,
} from '@libs/common';

@Controller()
export class TenantGameController {
  constructor(private readonly service: TenantGameService) {}

  // ✅ Assign game to tenant
  @MessagePattern('tenantGame.assign')
  assign(@Payload() dto: AssignGameDto) {
    return this.service.assignGame(dto);
  }

  // ✅ Get all tenant games
  @MessagePattern('tenantGame.findAll')
  findAll(@Payload() filter: TenantGameFilterDto) {
    return this.service.findAll(filter || {});
  }

  // ✅ Get single tenant game
  @MessagePattern('tenantGame.findOne')
  findOne(@Payload() id: string) {
    return this.service.findOne(id);
  }

  // ✅ Update tenant game
  @MessagePattern('tenantGame.update')
  update(
    @Payload()
    payload: {
      id: string;
      data: UpdateTenantGameDto;
    },
  ) {
    return this.service.update(payload.id, payload.data);
  }
}
