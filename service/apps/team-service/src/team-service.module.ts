import { Module } from '@nestjs/common';
import { TeamServiceController } from './team-service.controller';
import { TeamServiceService } from './team-service.service';

@Module({
  imports: [],
  controllers: [TeamServiceController],
  providers: [TeamServiceService],
})
export class TeamServiceModule {}
