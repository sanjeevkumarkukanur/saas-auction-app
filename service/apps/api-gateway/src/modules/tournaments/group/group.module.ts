import { Module } from '@nestjs/common';
import { GroupController } from './group.controller';
import { GroupProxy } from './group.proxy';
import { TournamentsClientModule } from '../tournaments-client.module';

@Module({
  imports: [TournamentsClientModule],
  controllers: [GroupController],
  providers: [GroupProxy],
})
export class GroupModule {}
