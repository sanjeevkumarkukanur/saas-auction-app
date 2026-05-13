import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SectionsService } from './sections.service';
import { CreateSectionDto, UpdateSectionDto } from '@libs/common';

@Controller()
export class SectionsController {
  constructor(private readonly sectionsService: SectionsService) {
    console.log('🔥 SectionsMsController LOADED');
  }

  // ✅ Create section
  @MessagePattern({ cmd: 'sections.create' })
  create(@Payload() dto: CreateSectionDto) {
    return this.sectionsService.create(dto);
  }

  // ✅ Find by page
  @MessagePattern({ cmd: 'sections.findByPage' })
  findByPage(@Payload() data: { pageId: string }) {
    return this.sectionsService.findByPage(data.pageId);
  }

  // ✅ Update
  @MessagePattern({ cmd: 'sections.update' })
  update(@Payload() data: { id: string; dto: UpdateSectionDto }) {
    return this.sectionsService.update(data.id, data.dto);
  }

  // ✅ Delete
  @MessagePattern({ cmd: 'sections.remove' })
  remove(@Payload() data: { id: string }) {
    return this.sectionsService.remove(data.id);
  }
}
