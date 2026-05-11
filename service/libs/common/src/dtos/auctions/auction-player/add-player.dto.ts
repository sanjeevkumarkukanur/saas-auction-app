import { IsString, IsNumber, IsBoolean, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AddPlayerToAuctionDto {
  @ApiProperty()
  @IsString()
  playerSeasonId!: string;

  @ApiProperty()
  @IsString()
  auctionId!: string;

  @ApiProperty()
  @IsNumber()
  basePrice!: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  isRetained?: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  isCaptainEligible?: boolean;
}