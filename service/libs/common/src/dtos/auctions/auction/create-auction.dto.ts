import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAuctionDto {
  @ApiProperty()
  @IsString()
  name!: string;

  @ApiProperty()
  @IsString()
  leagueId!: string;

  @ApiProperty()
  @IsString()
  seasonId!: string;

  @ApiProperty()
  @IsString()
  tenantId!: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  startTime?: string;
}
