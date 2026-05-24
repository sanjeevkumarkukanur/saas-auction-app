import { Module } from '@nestjs/common';
import { FixtureController } from './fixture.controller';
import { FixtureProxy } from './fixture.proxy';
import { TournamentsClientModule } from '../tournaments-client.module';

@Module({
  imports: [TournamentsClientModule],
  controllers: [FixtureController],
  providers: [FixtureProxy],
})
export class FixtureModule {}
