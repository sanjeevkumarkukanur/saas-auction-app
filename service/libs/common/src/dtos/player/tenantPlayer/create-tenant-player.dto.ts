import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class CreateTenantPlayerDto {
  @ApiProperty({ example: 'tenant-123' })
  @IsString()
  tenantId: string;

  @ApiProperty({ example: 'player-uuid' })
  @IsString()
  playerId: string;

  @ApiProperty({ example: 'Virat (RCB)', required: false })
  @IsOptional()
  @IsString()
  displayName?: string;
}