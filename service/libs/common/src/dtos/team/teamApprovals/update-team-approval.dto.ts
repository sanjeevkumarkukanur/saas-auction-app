import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateTeamApprovalDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  comment?: string;
}
