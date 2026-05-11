import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';

export enum TeamHistoryAction {
  CREATED = 'CREATED',
  RENAMED = 'RENAMED',
  OWNER_CHANGED = 'OWNER_CHANGED',
  LOGO_CHANGED = 'LOGO_CHANGED',
  COLOR_CHANGED = 'COLOR_CHANGED',
  SEASON_JOINED = 'SEASON_JOINED',
  SEASON_LEFT = 'SEASON_LEFT',
}

export class CreateTeamHistoryDto {
  @ApiProperty()
  @IsString()
  tenantId: string;

  @ApiProperty()
  @IsString()
  teamId: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  seasonTeamId?: string;

  @ApiProperty({ enum: TeamHistoryAction })
  @IsEnum(TeamHistoryAction)
  action: TeamHistoryAction;

  @ApiPropertyOptional()
  @IsOptional()
  oldValue?: any;

  @ApiPropertyOptional()
  @IsOptional()
  newValue?: any;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  changedBy?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  note?: string;
}
