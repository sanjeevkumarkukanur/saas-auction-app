import { Module } from '@nestjs/common';
import { FormatService } from './format.service';
import { FormatRepository } from './format.repository';
import { FormatController } from './format.controller';

@Module({
  controllers: [FormatController],
  providers: [FormatService, FormatRepository],
  exports: [FormatService],
})
export class FormatModule {}
