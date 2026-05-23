import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { LeaguesModule } from './modules/league/league.module';
import { SeasonModule } from './modules/seasons/season.module';

@Module({
  imports: [PrismaModule, LeaguesModule, SeasonModule],
})
export class LeaguesServiceModule {}
