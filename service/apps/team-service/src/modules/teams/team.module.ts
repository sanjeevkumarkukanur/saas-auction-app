import { Module } from '@nestjs/common';
import { TeamsRepository } from './teams.repository';
import { TeamsService } from './team.service';
import { TeamsController } from './team.controller';
import { PrismaModule } from '../../prisma/prisma.module';
import { TenantsClientModule } from '@libs/common';

@Module({
  imports: [PrismaModule, TenantsClientModule],
  controllers: [TeamsController],
  providers: [TeamsService, TeamsRepository],
  exports: [TeamsService],
})
export class TeamsModule {}
