import { Controller, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlayerTeamService } from './player-team.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { AssignPlayerTeamDto, UpdatePlayerTeamDto } from '@app/common';

@ApiTags('Player Team')
@Controller('player-team')
export class PlayerTeamController {
  constructor(private readonly service: PlayerTeamService) {}

  @Post()
  @ApiOperation({ summary: 'Assign player to team (after auction)' })
  assign(@Body() dto: AssignPlayerTeamDto) {
    return this.service.assign(dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update player role in team' })
  update(@Param('id') id: string, @Body() dto: UpdatePlayerTeamDto) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove player from team' })
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
