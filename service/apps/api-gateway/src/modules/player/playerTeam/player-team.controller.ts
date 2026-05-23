import { Controller, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlayerTeamProxy } from './player-team.proxy';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { AssignPlayerTeamDto, UpdatePlayerTeamDto } from '@libs/common';

@ApiTags('Player Team')
@Controller('player-team')
export class PlayerTeamController {
  constructor(private readonly proxy: PlayerTeamProxy) {}

  @Post()
  @ApiOperation({ summary: 'Assign player to team (after auction)' })
  assign(@Body() dto: AssignPlayerTeamDto) {
    return this.proxy.assign(dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update player role in team' })
  update(@Param('id') id: string, @Body() dto: UpdatePlayerTeamDto) {
    return this.proxy.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove player from team' })
  remove(@Param('id') id: string) {
    return this.proxy.delete(id);
  }
}
