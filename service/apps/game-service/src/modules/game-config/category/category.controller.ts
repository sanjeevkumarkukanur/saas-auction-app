import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CategoryService } from './category.service';
import {
  CategoryFilterDto,
  CreateCategoryDto,
  UpdateCategoryDto,
} from '@libs/common';

@Controller()
export class CategoryController {
  constructor(private readonly service: CategoryService) {}

  @MessagePattern('category.create')
  create(@Payload() dto: CreateCategoryDto) {
    return this.service.create(dto);
  }

  @MessagePattern('category.findAll')
  findAll(@Payload() filter: CategoryFilterDto) {
    return this.service.findAll(filter || {});
  }

  @MessagePattern('category.findOne')
  findOne(@Payload() id: string) {
    return this.service.findOne(id);
  }

  @MessagePattern('category.update')
  update(
    @Payload()
    payload: {
      id: string;
      data: UpdateCategoryDto;
    },
  ) {
    return this.service.update(payload.id, payload.data);
  }
}
