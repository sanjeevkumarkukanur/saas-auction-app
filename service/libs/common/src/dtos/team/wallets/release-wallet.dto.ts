import { IsNumber, IsString } from 'class-validator';

export class ReleaseWalletDto {
  @IsString()
  seasonTeamId: string;

  @IsNumber()
  amount: number;
}