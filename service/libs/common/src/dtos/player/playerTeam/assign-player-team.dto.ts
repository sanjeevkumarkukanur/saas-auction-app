import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class AssignPlayerTeamDto {
  @ApiProperty()
  @IsString()
  playerSeasonId: string;

  @ApiProperty()
  @IsString()
  teamId: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  roleInTeam?: string;
}
