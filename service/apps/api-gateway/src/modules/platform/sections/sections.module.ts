import { Module } from '@nestjs/common';
import { SectionsController } from './sections.controller';
import { SectionsProxy } from './sections.proxy';
import { PlatformClientModule } from '@libs/common';

@Module({
  imports: [PlatformClientModule],
  controllers: [SectionsController],
  providers: [SectionsProxy],
})
export class SectionsModule {}
