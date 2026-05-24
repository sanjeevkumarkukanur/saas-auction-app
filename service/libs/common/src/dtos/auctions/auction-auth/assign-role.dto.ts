import { AUCTION_ROLE, AuctionRole } from '@libs/common/constants';
import { IsString, IsEnum } from 'class-validator';

export class AssignAuctionRoleDto {
  @IsString()
  auctionId!: string;

  @IsString()
  userId!: string;

  @IsEnum(AUCTION_ROLE)
  role!: AuctionRole;
}
