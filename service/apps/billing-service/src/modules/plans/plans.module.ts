import { Module } from '@nestjs/common';
import { PlanService } from './plans.service';
import { PlanRepository } from './plans.repository';
import { PrismaModule } from '../../prisma/prisma.module';
import { PlanController } from './plans.controller';

@Module({
  imports: [PrismaModule],
  controllers: [PlanController],
  providers: [PlanService, PlanRepository],
  exports: [PlanService],
})
export class PlansModule {}
