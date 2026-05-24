import { Module } from '@nestjs/common';
import { TournamentProxy } from './tournament.proxy';
import { TournamentController } from './tournament.controller';
import { TournamentsClientModule } from '@libs/common';

@Module({
  imports: [TournamentsClientModule],
  controllers: [TournamentController],
  providers: [TournamentProxy],
})
export class TournamentModule {}
