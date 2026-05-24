import { Controller, Post, Get, Body, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FixtureProxy } from './fixture.proxy';
import { GenerateFixtureDto } from '@libs/common';

@ApiTags('Fixtures')
@Controller('fixtures')
export class FixtureController {
  constructor(private readonly proxy: FixtureProxy) {}

  @Post('generate')
  generate(@Body() dto: GenerateFixtureDto) {
    return this.proxy.generate(dto);
  }

  @Get()
  find(@Query('stageId') stageId?: string, @Query('groupId') groupId?: string) {
    if (groupId) {
      return this.proxy.findByGroup(groupId);
    }

    if (stageId) {
      return this.proxy.findByStage(stageId);
    }

    return { message: 'Provide stageId or groupId' };
  }
}
