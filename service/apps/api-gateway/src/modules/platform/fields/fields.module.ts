import { Module } from '@nestjs/common';
import { FieldsProxy } from './fields.proxy';
import { PlatformClientModule } from '@libs/common';
import { FieldsController } from './fields.controller';

@Module({
  imports: [PlatformClientModule],
  controllers: [FieldsController],
  providers: [FieldsProxy],
  exports: [FieldsProxy],
})
export class FieldsModule {}
