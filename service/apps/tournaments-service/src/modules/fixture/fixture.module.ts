import { Module } from '@nestjs/common';
import { FixtureRepository } from './fixture.repository';
import { FixtureMsController } from './fixture.ms.controller';
import { FixtureService } from './fixture.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [FixtureService, FixtureRepository],
  controllers: [FixtureMsController],
  exports: [FixtureService],
})
export class FixtureModule {}
