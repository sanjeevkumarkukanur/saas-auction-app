import { Module } from '@nestjs/common';
import { MatchController } from './match.controller';
import { MatchService } from './match.service';
import { MatchRepository } from './match.repository';
import { PrismaModule } from '../prisma/prisma.module';
import { MatchMsController } from './match.ms.controller';

@Module({
  imports: [PrismaModule],
  controllers: [MatchController, MatchMsController],
  providers: [MatchService, MatchRepository],
  exports: [MatchService],
})
export class MatchModule {}
