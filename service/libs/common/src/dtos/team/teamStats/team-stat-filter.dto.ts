import { IsOptional, IsString } from 'class-validator';

export class TeamStatFilterDto {
  @IsOptional()
  @IsString()
  tenantId?: string;

  @IsOptional()
  @IsString()
  seasonTeamId?: string;
}