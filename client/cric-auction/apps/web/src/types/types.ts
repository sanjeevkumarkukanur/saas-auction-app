
export enum PlayerRole {
  BATSMAN = 'Batsman',
  BOWLER = 'Bowler',
  ALL_ROUNDER = 'All-Rounder',
  WICKET_KEEPER = 'Wicket Keeper'
}

export enum PlayerStatus {
  UNSOLD = 'Unsold',
  SOLD = 'Sold',
  UPCOMING = 'Upcoming'
}

export interface Player {
  id: string;
  name: string;
  country: string;
  role: PlayerRole;
  basePrice: number;
  currentBid: number;
  status: PlayerStatus;
  imageUrl: string;
  stats: {
    matches: number;
    runs?: number;
    wickets?: number;
    strikeRate?: number;
    economy?: number;
  };
}

export interface Team {
  id: string;
  name: string;
  budget: number;
  logo: string;
  playersBought: string[];
}

export interface User {
  id: string;
  username: string;
  role: 'admin' | 'team_owner';
  teamId?: string;
}
