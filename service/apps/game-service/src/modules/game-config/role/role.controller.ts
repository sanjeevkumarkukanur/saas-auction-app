import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { RoleService } from './role.service';
import { CreateRoleDto, RoleFilterDto, UpdateRoleDto } from '@libs/common';

@Controller()
export class RoleController {
  constructor(private readonly service: RoleService) {}

  @MessagePattern('role.create')
  create(@Payload() dto: CreateRoleDto) {
    return this.service.create(dto);
  }

  @MessagePattern('role.findAll')
  findAll(@Payload() filter: RoleFilterDto) {
    return this.service.findAll(filter || {});
  }

  @MessagePattern('role.findOne')
  findOne(@Payload() id: string) {
    return this.service.findOne(id);
  }

  @MessagePattern('role.update')
  update(
    @Payload()
    payload: {
      id: string;
      data: UpdateRoleDto;
    },
  ) {
    return this.service.update(payload.id, payload.data);
  }
}
