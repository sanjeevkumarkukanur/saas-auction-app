import { Module } from '@nestjs/common';
import { FieldsService } from './fields.service';
import { FieldsRepository } from './fields.repository';
import { PrismaModule } from '../../prisma/prisma.module';
import { FieldsController } from './fields.controller';

@Module({
  imports: [PrismaModule],
  controllers: [FieldsController],
  providers: [FieldsService, FieldsRepository], // 👈 include repository
})
export class FieldsModule {}
