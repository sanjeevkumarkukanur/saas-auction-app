import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePlayerLeagueDto {
  @ApiProperty({ example: 'player-uuid' })
  @IsString()
  playerId: string;

  @ApiProperty({ example: 'league-uuid' })
  @IsString()
  leagueId: string;
}