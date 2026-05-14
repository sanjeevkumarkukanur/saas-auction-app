import { Module } from '@nestjs/common';
import { FormatController } from './format.controller';
import { FormatProxyService } from './format.proxy.service';
import { GamesClientModule } from '@libs/common';

@Module({
  imports: [GamesClientModule],
  controllers: [FormatController],
  providers: [FormatProxyService],
})
export class FormatModule {}
