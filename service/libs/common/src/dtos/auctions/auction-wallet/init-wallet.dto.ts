import { IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class InitAuctionWalletDto {
  @ApiProperty()
  @IsString()
  auctionId!: string;

  @ApiProperty()
  @IsString()
  teamId!: string;

  @ApiProperty()
  @IsNumber()
  totalBudget!: number;
}
