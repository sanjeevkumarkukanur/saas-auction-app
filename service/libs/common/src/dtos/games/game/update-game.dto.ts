import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsBoolean } from 'class-validator';

export class UpdateGameDto {
  @ApiPropertyOptional({
    example: 'Cricket Updated',
    description: 'Updated name of the game',
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({
    example: true,
    description: 'Activate or deactivate the game',
  })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
