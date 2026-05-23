import { Module } from '@nestjs/common';
import { TimelineController } from './timeline.controller';
import { TimelineProxy } from './timeline.proxy';
import { MatchClientModule } from '@libs/common';

@Module({
  imports: [MatchClientModule],
  controllers: [TimelineController],
  providers: [TimelineProxy],
})
export class TimelineModule {}
