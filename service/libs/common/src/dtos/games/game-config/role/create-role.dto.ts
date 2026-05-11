import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateRoleDto {
  @ApiProperty({ example: 'game-uuid' })
  @IsString()
  gameId!: string;

  @ApiProperty({ example: 'batsman' })
  @IsString()
  key!: string;

  @ApiProperty({ example: 'Batsman' })
  @IsString()
  name!: string;
}
