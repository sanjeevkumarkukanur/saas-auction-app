import { Module } from '@nestjs/common';
import { TimelineService } from './timeline.service';
import { TimelineRepository } from './timeline.repository';
import { TimelineMsController } from './timeline.ms.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TimelineMsController],
  providers: [TimelineService, TimelineRepository],
  exports: [TimelineService],
})
export class TimelineModule {}
