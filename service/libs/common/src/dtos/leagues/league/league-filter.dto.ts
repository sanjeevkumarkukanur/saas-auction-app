import { IsOptional, IsEnum, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { LeagueStatus } from '../../../enums/leagues.enum';

export class LeagueFilterDto {
  @ApiPropertyOptional({
    example: '67853ae1-43e2-4a8b-8623-1cb8ea8a6de8',
    description: 'Tenant ID (optional - usually from header)',
  })
  @IsOptional()
  @IsString()
  tenantId?: string;

  @ApiPropertyOptional({
    enum: LeagueStatus,
    example: LeagueStatus.DRAFT,
    description: 'Filter leagues by status',
  })
  @IsOptional()
  @IsEnum(LeagueStatus)
  status?: LeagueStatus;

  @ApiPropertyOptional({
    example: 'f4e197d5-8e8b-4d98-9ba1-e7c85eb4cb84',
    description: 'Filter by Tenant Game ID',
  })
  @IsOptional()
  @IsString()
  tenantGameId?: string;
}
