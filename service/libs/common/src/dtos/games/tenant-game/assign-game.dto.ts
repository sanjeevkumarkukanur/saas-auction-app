import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsArray, ArrayNotEmpty, IsOptional } from 'class-validator';

export class AssignGameDto {
  @ApiProperty({ example: 'tenant-uuid' })
  @IsString()
  tenantId: string;

  // ✅ Single game (existing)
  @ApiPropertyOptional({ example: 'game-uuid' })
  @IsOptional()
  @IsString()
  gameId?: string;

  // ✅ Multiple games (NEW)
  @ApiPropertyOptional({
    example: ['game-uuid-1', 'game-uuid-2'],
    description: 'Assign multiple games to tenant',
  })
  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true }) // 🔥 validates each item
  gameIds?: string[];
}
