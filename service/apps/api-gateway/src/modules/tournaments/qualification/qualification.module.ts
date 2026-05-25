import { Module } from '@nestjs/common';
import { QualificationController } from './qualification.controller';
import { QualificationProxy } from './qualification.proxy';
import { TournamentsClientModule } from '@libs/common';

@Module({
  imports: [TournamentsClientModule],
  controllers: [QualificationController],
  providers: [QualificationProxy],
})
export class QualificationModule {}
