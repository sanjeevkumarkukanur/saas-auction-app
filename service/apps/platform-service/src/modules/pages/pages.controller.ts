import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PagesService } from './pages.service';
import { CreatePageDto, UpdatePageDto } from '@libs/common';

@Controller()
export class PagesController {
  constructor(private readonly pagesService: PagesService) {
    console.log('🔥 PagesMsController LOADED');
  }

  // ✅ Find all pages
  @MessagePattern({ cmd: 'pages.findAll' })
  findAll() {
    return this.pagesService.findAll();
  }

  // ✅ Find one page by id
  @MessagePattern({ cmd: 'pages.findOne' })
  findOne(@Payload() data: { id: string }) {
    return this.pagesService.findOne(data.id);
  }

  // ✅ Create page
  @MessagePattern({ cmd: 'pages.create' })
  create(@Payload() dto: CreatePageDto) {
    return this.pagesService.create(dto);
  }

  // ✅ Update page
  @MessagePattern({ cmd: 'pages.update' })
  update(@Payload() data: { id: string; dto: UpdatePageDto }) {
    return this.pagesService.update(data.id, data.dto);
  }

  // ✅ Delete page
  @MessagePattern({ cmd: 'pages.remove' })
  remove(@Payload() data: { id: string }) {
    return this.pagesService.remove(data.id);
  }
}
