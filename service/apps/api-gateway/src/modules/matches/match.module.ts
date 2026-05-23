import { Module } from '@nestjs/common';
import { MatchModule } from './match/match.module';
import { ScoringModule } from './scoring/scoring.module';
import { TimelineModule } from './timeline/timeline.module';

@Module({
  imports: [MatchModule, ScoringModule, TimelineModule],
})
export class TournamentsModule {}
