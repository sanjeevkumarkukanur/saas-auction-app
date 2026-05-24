import { Module } from '@nestjs/common';
import { TournamentService } from './tournament.service';
import { TournamentRepository } from './tournament.repository';
import { TournamentController } from './tournament.controller';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  controllers: [TournamentController],
  providers: [TournamentService, TournamentRepository, PrismaModule],
  exports: [TournamentService],
})
export class TournamentModule {}
