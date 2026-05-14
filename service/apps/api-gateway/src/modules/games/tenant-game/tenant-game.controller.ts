import {
  Controller,
  Post,
  Get,
  Patch,
  Param,
  Body,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { TenantGameProxyService } from './tenant-game.proxy.service';
import {
  AssignGameDto,
  TenantGameFilterDto,
  UpdateTenantGameDto,
} from '@libs/common';

@ApiTags('Tenant Games')
@Controller('tenant-games')
export class TenantGameController {
  constructor(private readonly proxy: TenantGameProxyService) {}

  @Post()
  @ApiOperation({ summary: 'Assign game to tenant' })
  assign(@Body() body: AssignGameDto) {
    return this.proxy.assignGame(body);
  }

  @Get()
  @ApiOperation({ summary: 'Get tenant games' })
  findAll(@Query() query: TenantGameFilterDto) {
    return this.proxy.getTenantGames(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get tenant game by ID' })
  findOne(@Param('id') id: string) {
    return this.proxy.getTenantGameById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update tenant game' })
  update(@Param('id') id: string, @Body() body: UpdateTenantGameDto) {
    return this.proxy.updateTenantGame(id, body);
  }
}
