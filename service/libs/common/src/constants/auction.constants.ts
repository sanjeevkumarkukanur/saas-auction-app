// libs/common/src/constants/auction.constants.ts

//////////////////////////////////////////////////////
// 🎯 Auction Status
//////////////////////////////////////////////////////

export const AUCTION_STATUS = {
  PENDING: 'PENDING',
  LIVE: 'LIVE',
  PAUSED: 'PAUSED',
  COMPLETED: 'COMPLETED',
} as const;

export type AuctionStatus =
  (typeof AUCTION_STATUS)[keyof typeof AUCTION_STATUS];

//////////////////////////////////////////////////////
// 👤 Auction Player Status
//////////////////////////////////////////////////////

export const AUCTION_PLAYER_STATUS = {
  AVAILABLE: 'AVAILABLE',
  SOLD: 'SOLD',
  UNSOLD: 'UNSOLD',
} as const;

export type AuctionPlayerStatus =
  (typeof AUCTION_PLAYER_STATUS)[keyof typeof AUCTION_PLAYER_STATUS];

//////////////////////////////////////////////////////
// 🔐 Auction Roles
//////////////////////////////////////////////////////

export const AUCTION_ROLE = {
  ADMIN: 'ADMIN',
  TEAM_OWNER: 'TEAM_OWNER',
  VIEWER: 'VIEWER',
} as const;

export type AuctionRole = (typeof AUCTION_ROLE)[keyof typeof AUCTION_ROLE];
