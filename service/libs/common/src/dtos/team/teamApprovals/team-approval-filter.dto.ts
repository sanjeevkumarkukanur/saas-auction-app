import { IsOptional, IsString } from 'class-validator';

export class TeamApprovalFilterDto {
  @IsOptional()
  @IsString()
  tenantId?: string;

  @IsOptional()
  @IsString()
  teamId?: string;

  @IsOptional()
  @IsString()
  status?: string;
}
