import { Module } from '@nestjs/common';
import { SeasonService } from './season.service';
import { SeasonController } from './season.controller';
import { SeasonMsController } from './season.ms.controller';
import { PrismaModule } from '../../prisma/prisma.module';
import { SeasonRepository } from './season.repository';

@Module({
  imports: [PrismaModule],
  controllers: [SeasonController, SeasonMsController],
  providers: [SeasonService, SeasonRepository],
})
export class SeasonModule {}
