import { IsString, IsEnum } from 'class-validator';

export enum AuctionRole {
  ADMIN = 'ADMIN',
  TEAM_OWNER = 'TEAM_OWNER',
  VIEWER = 'VIEWER',
}

export class AssignAuctionRoleDto {
  @IsString()
  auctionId!: string;

  @IsString()
  userId!: string;

  @IsEnum(AuctionRole)
  role!: AuctionRole;
}