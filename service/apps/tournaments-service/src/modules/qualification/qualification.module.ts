import { Module } from '@nestjs/common';
import { QualificationRepository } from './qualification.repository';
import { QualificationMsController } from './qualification.ms.controller';
import { QualificationService } from './qualification.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [QualificationService, QualificationRepository],
  controllers: [QualificationMsController],
  exports: [QualificationService],
})
export class QualificationModule {}
