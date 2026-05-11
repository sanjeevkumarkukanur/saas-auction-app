import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateFormatDto {
  @ApiProperty({ example: 'game-uuid' })
  @IsString()
  gameId: string;

  @ApiProperty({ example: 't20' })
  @IsString()
  key: string;

  @ApiProperty({ example: 'T20' })
  @IsString()
  name: string;
}
