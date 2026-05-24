import { Module } from '@nestjs/common';
import { StageController } from './stage.controller';
import { StageProxy } from './stage.proxy';
import { TournamentsClientModule } from '../tournaments-client.module';

@Module({
  imports: [TournamentsClientModule],
  controllers: [StageController],
  providers: [StageProxy],
})
export class StageModule {}
