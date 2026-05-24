import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { QualificationProxy } from './qualification.proxy';
import { QualifyStageDto } from '@libs/common';

@ApiTags('Qualification')
@Controller('qualification')
export class QualificationController {
  constructor(private readonly proxy: QualificationProxy) {}

  @Post('run')
  run(@Body() dto: QualifyStageDto) {
    return this.proxy.runQualification(dto);
  }
}
