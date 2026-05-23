import { Module } from '@nestjs/common';
import { ScoringController } from './scoring.controller';
import { ScoringProxy } from './scoring.proxy';
import { MatchClientModule } from '@libs/common';

@Module({
  imports: [MatchClientModule],
  controllers: [ScoringController],
  providers: [ScoringProxy],
})
export class ScoringModule {}
