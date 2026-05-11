import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateRuleDto {
  @ApiProperty({ example: 'game-uuid' })
  @IsString()
  gameId: string;

  @ApiProperty({ example: 'maxPlayers' })
  @IsString()
  key: string;

  @ApiProperty({ example: 'number' })
  @IsString()
  valueType: string;

  @ApiProperty({ example: '11' })
  @IsString()
  defaultValue: string;

  @ApiProperty({ example: 'Maximum players allowed' })
  @IsString()
  description: string;
}
