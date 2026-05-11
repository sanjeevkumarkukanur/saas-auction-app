import { IsOptional, IsString } from 'class-validator';

export class TeamHistoryFilterDto {
  @IsOptional()
  @IsString()
  tenantId?: string;

  @IsOptional()
  @IsString()
  teamId?: string;

  @IsOptional()
  @IsString()
  seasonTeamId?: string;
}
