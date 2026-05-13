import { Module } from '@nestjs/common';
import { TeamOwnerService } from './team-owner.service';
import { TeamOwnerRepository } from './team-owner.repository';
import { TeamOwnerController } from './team-owner.controller';

@Module({
  controllers: [TeamOwnerController],
  providers: [TeamOwnerService, TeamOwnerRepository],
})
export class TeamOwnerModule {}
