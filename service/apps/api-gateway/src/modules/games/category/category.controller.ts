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
import { CategoryProxyService } from './category.proxy.service';
import {
  CategoryFilterDto,
  CreateCategoryDto,
  UpdateCategoryDto,
} from '@libs/common';

@ApiTags('Game Categories')
@Controller('categories')
export class CategoryController {
  constructor(private readonly proxy: CategoryProxyService) {}

  @Post()
  @ApiOperation({ summary: 'Create category' })
  create(@Body() body: CreateCategoryDto) {
    return this.proxy.createCategory(body);
  }

  @Get()
  @ApiOperation({ summary: 'Get all categories' })
  findAll(@Query() query: CategoryFilterDto) {
    return this.proxy.getCategories(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get category by ID' })
  findOne(@Param('id') id: string) {
    return this.proxy.getCategoryById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update category' })
  update(@Param('id') id: string, @Body() body: UpdateCategoryDto) {
    return this.proxy.updateCategory(id, body);
  }
}
