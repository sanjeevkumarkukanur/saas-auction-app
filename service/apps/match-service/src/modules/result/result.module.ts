import { Module } from '@nestjs/common';
import { ResultService } from './result.service';
import { PrismaModule } from '../prisma/prisma.module';
import { ResultMsController } from './result.ms.controller';

@Module({
  imports: [PrismaModule],
  controllers: [ResultMsController],
  providers: [ResultService],
  exports: [ResultService],
})
export class ResultModule {}
