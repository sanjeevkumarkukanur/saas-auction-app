import { Module } from '@nestjs/common';
import { SeasonProxy } from './season.proxy';
import { SeasonController } from './season.controller';
import { LeaguesClientModule } from '@libs/common';

@Module({
  imports: [LeaguesClientModule],
  controllers: [SeasonController],
  providers: [SeasonProxy],
  exports: [SeasonProxy],
})
export class SeasonModule {}
