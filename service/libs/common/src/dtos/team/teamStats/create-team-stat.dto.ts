import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateTeamStatDto {
  @ApiProperty()
  @IsString()
  tenantId: string;

  @ApiProperty()
  @IsString()
  seasonTeamId: string;

  @ApiProperty({ example: 10000000 })
  @Type(() => Number)
  @IsNumber()
  purseLeft: number;
}
