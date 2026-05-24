import { Module } from '@nestjs/common';
import { TournamentModule } from './tournament/tournament.module';
import { StageModule } from './stage/stage.module';
import { QualificationModule } from './qualification/qualification.module';
import { GroupModule } from './group/group.module';
import { FixtureModule } from './fixture/fixture.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TournamentModule,
    StageModule,
    QualificationModule,
    GroupModule,
    FixtureModule,
    ConfigModule,
  ],
})
export class TournamentsModule {}
