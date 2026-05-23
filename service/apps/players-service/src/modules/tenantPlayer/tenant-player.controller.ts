import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { TenantPlayerService } from './tenant-player.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateTenantPlayerDto, UpdateTenantPlayerDto } from '@app/common';

@ApiTags('Tenant Players')
@Controller('tenant-players')
export class TenantPlayerController {
  constructor(private readonly tenantPlayerService: TenantPlayerService) {}

  @Post()
  create(@Body() dto: CreateTenantPlayerDto) {
    return this.tenantPlayerService.create(dto);
  }

  @Get(':tenantId')
  findByTenant(@Param('tenantId') tenantId: string) {
    return this.tenantPlayerService.findByTenant(tenantId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateTenantPlayerDto) {
    return this.tenantPlayerService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tenantPlayerService.remove(id);
  }
}
