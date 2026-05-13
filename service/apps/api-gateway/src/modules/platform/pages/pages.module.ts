import { Module } from '@nestjs/common';
import { PagesController } from './pages.controller';
import { PagesProxy } from './pages.proxy';
import { PlatformClientModule } from '@libs/common';

@Module({
  imports: [PlatformClientModule],
  controllers: [PagesController],
  providers: [PagesProxy],
})
export class PagesModule {}
