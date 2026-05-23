import { Module } from '@nestjs/common';
import { MatchController } from './match.controller';
import { MatchProxy } from './match.proxy';
import { MatchClientModule } from '@libs/common';

@Module({
  imports: [MatchClientModule],
  controllers: [MatchController],
  providers: [MatchProxy],
})
export class MatchModule {}
