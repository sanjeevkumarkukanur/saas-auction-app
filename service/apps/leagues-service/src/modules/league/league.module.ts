import { Module } from '@nestjs/common';
import { LeaguesRepository } from './leagues.repository';
import { PrismaModule } from '../../prisma/prisma.module';
import { LeaguesMsController } from './leagues.ms.controller';
import { LeaguesController } from './league.controller';
import { LeaguesService } from './league.service';

@Module({
  imports: [PrismaModule],
  controllers: [LeaguesController, LeaguesMsController],
  providers: [LeaguesService, LeaguesRepository],
})
export class LeaguesModule {}
