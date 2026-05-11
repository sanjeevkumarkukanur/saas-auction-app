import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdatePlayerTeamDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  roleInTeam?: string;
}
