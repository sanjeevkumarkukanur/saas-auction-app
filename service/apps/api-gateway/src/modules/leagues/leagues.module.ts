import { Module } from '@nestjs/common';
import { SeasonModule } from './season/season.module';
import { LeagueModule } from './league/league.module';

@Module({
  imports: [LeagueModule, SeasonModule],
})
export class LeaguesModule {}
