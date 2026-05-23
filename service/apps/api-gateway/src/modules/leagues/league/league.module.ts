import { Module } from '@nestjs/common';
import { LeagueController } from './league.controller';
import { LeagueProxy } from './league.proxy';
import { LeaguesClientModule } from '../leagues-client.module';

@Module({
  imports: [LeaguesClientModule],
  controllers: [LeagueController],
  providers: [LeagueProxy],
})
export class LeagueModule {}
