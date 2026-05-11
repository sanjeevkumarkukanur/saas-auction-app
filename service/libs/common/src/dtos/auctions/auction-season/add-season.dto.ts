import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AddAuctionSeasonDto {
  @ApiProperty()
  @IsString()
  auctionId!: string;

  @ApiProperty()
  @IsString()
  seasonId!: string;
}