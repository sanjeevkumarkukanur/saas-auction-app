import { IsString } from 'class-validator';

export class UpdateAuctionStatusDto {
  @IsString()
  auctionId!: string;

  @IsString()
  status!: 'PENDING' | 'LIVE' | 'PAUSED' | 'COMPLETED';
}