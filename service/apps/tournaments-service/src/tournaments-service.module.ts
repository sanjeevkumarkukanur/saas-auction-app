import { Module } from '@nestjs/common';
import { TournamentModule } from './modules/tournament/tournament.module';
import { StageModule } from './modules/stage/stage.module';
import { GroupModule } from './modules/group/group.module';
import { FixtureModule } from './modules/fixture/fixture.module';
import { QualificationModule } from './modules/qualification/qualification.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TournamentModule,
    StageModule,
    GroupModule,
    FixtureModule,
    QualificationModule,
    ConfigModule,
  ],
})
export class TournamentsServiceModule {}
