import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class SeasonTeamFilterDto {
  @ApiPropertyOptional({
    example: 'tenant-123',
    description: 'Filter by tenant',
  })
  @IsOptional()
  @IsString()
  tenantId?: string;

  @ApiPropertyOptional({
    example: 'season-2026',
    description: 'Filter by season',
  })
  @IsOptional()
  @IsString()
  seasonId?: string;

  @ApiPropertyOptional({
    example: 'Mumbai',
    description: 'Search by display name',
  })
  @IsOptional()
  @IsString()
  search?: string;
}