import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { TenantPlayerProxy } from './tenant-player.proxy';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreateTenantPlayerDto, UpdateTenantPlayerDto } from '@libs/common';

@ApiTags('Tenant Players')
@Controller('tenant-players')
export class TenantPlayerController {
  constructor(private readonly tenantPlayerProxy: TenantPlayerProxy) {}

  @Post()
  @ApiOperation({ summary: 'Assign player to tenant' })
  create(@Body() dto: CreateTenantPlayerDto) {
    return this.tenantPlayerProxy.create(dto);
  }

  @Get(':tenantId')
  @ApiOperation({ summary: 'Get players by tenant' })
  findByTenant(@Param('tenantId') tenantId: string) {
    return this.tenantPlayerProxy.findByTenant(tenantId);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update tenant player' })
  update(@Param('id') id: string, @Body() dto: UpdateTenantPlayerDto) {
    return this.tenantPlayerProxy.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove tenant player' })
  remove(@Param('id') id: string) {
    return this.tenantPlayerProxy.delete(id);
  }
}
