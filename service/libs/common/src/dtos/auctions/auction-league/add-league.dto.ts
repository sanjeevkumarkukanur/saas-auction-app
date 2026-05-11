import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AddAuctionLeagueDto {
  @ApiProperty()
  @IsString()
  auctionId!: string;

  @ApiProperty()
  @IsString()
  leagueId!: string;
}
