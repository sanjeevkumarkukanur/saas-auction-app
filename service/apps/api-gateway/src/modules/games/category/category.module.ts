import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryProxyService } from './category.proxy.service';
import { GamesClientModule } from '@libs/common';

@Module({
  imports: [GamesClientModule],
  controllers: [CategoryController],
  providers: [CategoryProxyService],
})
export class CategoryModule {}
