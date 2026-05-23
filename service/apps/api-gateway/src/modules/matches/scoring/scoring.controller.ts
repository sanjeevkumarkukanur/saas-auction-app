import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ScoringProxy } from './scoring.proxy';
import { ApproveScoreDto, SubmitScoreDto } from '@libs/common';

@ApiTags('Scoring')
@Controller('scores')
export class ScoringController {
  constructor(private readonly proxy: ScoringProxy) {}

  // 🔥 Submit or Update Score
  @Post('submit')
  @ApiOperation({ summary: 'Submit or update score' })
  submit(@Body() dto: SubmitScoreDto) {
    return this.proxy.submit(dto);
  }

  // 🔥 Approve Score
  @Post('approve')
  @ApiOperation({ summary: 'Approve final score' })
  approve(@Body() dto: ApproveScoreDto) {
    return this.proxy.approve(dto);
  }

  // 🔥 Get Team Score
  @Get(':matchId/:teamId')
  @ApiOperation({ summary: 'Get team score' })
  findOne(@Param('matchId') matchId: string, @Param('teamId') teamId: string) {
    return this.proxy.findOne(matchId, teamId);
  }
}
