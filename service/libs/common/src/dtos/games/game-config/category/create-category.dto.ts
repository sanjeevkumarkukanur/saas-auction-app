import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({ example: 'game-uuid' })
  @IsString()
  gameId: string;

  @ApiProperty({ example: 'overseas' })
  @IsString()
  key: string;

  @ApiProperty({ example: 'Overseas' })
  @IsString()
  name: string;
}
