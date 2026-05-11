import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class TeamFilterDto {
  @ApiPropertyOptional({
    example: 'tenant-123',
    description: 'Tenant ID used for multi-tenant filtering',
  })
  @IsOptional()
  @IsString()
  tenantId?: string;

  @ApiPropertyOptional({
    example: 'Mumbai',
    description: 'Search by team name, short name, or code',
  })
  @IsOptional()
  @IsString()
  search?: string;
}