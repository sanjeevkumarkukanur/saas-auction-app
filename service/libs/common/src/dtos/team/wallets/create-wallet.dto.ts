import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateWalletDto {
  @ApiProperty()
  @IsString()
  tenantId: string;

  @ApiProperty()
  @IsString()
  seasonTeamId: string;

  @ApiProperty()
  @Type(() => Number)
  @IsNumber()
  totalBudget: number;
}