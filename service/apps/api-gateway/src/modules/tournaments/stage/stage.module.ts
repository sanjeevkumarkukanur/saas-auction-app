import { Module } from '@nestjs/common';
import { StageController } from './stage.controller';
import { StageProxy } from './stage.proxy';
import { TournamentsClientModule } from '@libs/common';

@Module({
  imports: [TournamentsClientModule],
  controllers: [StageController],
  providers: [StageProxy],
})
export class StageModule {}
