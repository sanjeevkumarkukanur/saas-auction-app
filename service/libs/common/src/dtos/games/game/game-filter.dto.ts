import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsBoolean } from 'class-validator';

export class GameFilterDto {
  @ApiPropertyOptional({
    example: true,
    description: 'Filter games by active status',
  })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
