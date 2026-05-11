import { IsOptional, IsString } from 'class-validator';

export class PresenceFilterDto {
  @IsOptional()
  @IsString()
  tenantId?: string;

  @IsOptional()
  @IsString()
  seasonTeamId?: string;
}
