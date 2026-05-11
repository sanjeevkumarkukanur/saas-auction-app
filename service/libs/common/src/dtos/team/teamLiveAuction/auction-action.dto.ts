import { IsString } from 'class-validator';

export class AuctionActionDto {
  @IsString()
  seasonTeamId: string;
}