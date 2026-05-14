import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import {
  CategoryFilterDto,
  CreateCategoryDto,
  UpdateCategoryDto,
} from '@libs/common';

@Injectable()
export class CategoryProxyService {
  constructor(@Inject('GAME_SERVICE') private readonly client: ClientProxy) {}

  createCategory(data: CreateCategoryDto) {
    return lastValueFrom(this.client.send('category.create', data));
  }

  getCategories(filter: CategoryFilterDto) {
    return lastValueFrom(this.client.send('category.findAll', filter));
  }

  getCategoryById(id: string) {
    return lastValueFrom(this.client.send('category.findOne', id));
  }

  updateCategory(id: string, data: UpdateCategoryDto) {
    return lastValueFrom(this.client.send('category.update', { id, data }));
  }
}
