import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PagesProxy } from './pages.proxy';
import { ApiTags } from '@nestjs/swagger';
import { CreatePageDto, UpdatePageDto } from '@libs/common';

@ApiTags('Master Pages')
@Controller('pages')
export class PagesController {
  constructor(private readonly proxy: PagesProxy) {}

  // ✅ GET /pages
  // @UseGuards(JwtGuard, SuperAdminGuard)
  // @UseGuards(JwtGuard, TenantGuard)

  @Get()
  getAll() {
    return this.proxy.findAll();
  }

  // ✅ GET /pages/:id
  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.proxy.findOne(id);
  }

  // ✅ POST /pages
  @Post()
  create(@Body() dto: CreatePageDto) {
    return this.proxy.create(dto);
  }

  // ✅ PATCH /pages/:id
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdatePageDto) {
    return this.proxy.update(id, dto);
  }

  // ✅ DELETE /pages/:id
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proxy.remove(id);
  }
}
