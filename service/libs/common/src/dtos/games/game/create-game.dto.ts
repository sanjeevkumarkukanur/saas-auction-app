import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CreateGameDto {
  @ApiProperty({
    example: 'cricket',
    description: 'Unique key for the game',
  })
  @IsString()
  key!: string;

  @ApiProperty({
    example: 'Cricket',
    description: 'Display name of the game',
  })
  @IsString()
  name!: string;

  @ApiPropertyOptional({
    example: 'Sports',
    description: 'Short tag/category for game',
  })
  @IsOptional()
  @IsString()
  tag?: string;

  @ApiPropertyOptional({
    example: 'A bat and ball team sport',
    description: 'Detailed game description',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({
    example: 'https://cdn.app.com/icons/cricket.png',
    description: 'Game icon URL',
  })
  @IsOptional()
  @IsString()
  icon?: string;

  @ApiProperty({
    example: '/tenant/cricket',
    description: 'Frontend route for this game',
  })
  @IsString()
  route!: string;

  @ApiPropertyOptional({
    example: true,
    description: 'Whether the game is active',
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
