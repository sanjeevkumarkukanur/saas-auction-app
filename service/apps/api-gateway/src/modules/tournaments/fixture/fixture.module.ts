import { Module } from '@nestjs/common';
import { FixtureController } from './fixture.controller';
import { FixtureProxy } from './fixture.proxy';
import { TournamentsClientModule } from '@libs/common';

@Module({
  imports: [TournamentsClientModule],
  controllers: [FixtureController],
  providers: [FixtureProxy],
})
export class FixtureModule {}
