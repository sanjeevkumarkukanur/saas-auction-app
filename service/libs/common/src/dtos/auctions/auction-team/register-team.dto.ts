import { IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterAuctionTeamDto {
  @ApiProperty({
    example: 'auction-123',
    description: 'Auction ID',
  })
  @IsString()
  auctionId!: string;

  @ApiProperty({
    example: 'team-456',
    description: 'Team ID',
  })
  @IsString()
  teamId!: string;

  @ApiProperty({
    example: 10000000,
    description: 'Initial budget assigned to the team',
  })
  @IsNumber()
  initialBudget!: number;
}