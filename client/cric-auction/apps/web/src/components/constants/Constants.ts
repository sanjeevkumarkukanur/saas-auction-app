
import { Player, PlayerRole, PlayerStatus, Team } from "../../types/types";

export const MOCK_PLAYERS: Player[] = [
  {
    id: '1',
    name: 'Virat Kohli',
    country: 'India',
    role: PlayerRole.BATSMAN,
    basePrice: 200,
    currentBid: 1500,
    status: PlayerStatus.SOLD,
    imageUrl: 'https://picsum.photos/seed/virat/400/400',
    stats: { matches: 250, runs: 7500, strikeRate: 135.5 }
  },
  {
    id: '2',
    name: 'Jasprit Bumrah',
    country: 'India',
    role: PlayerRole.BOWLER,
    basePrice: 200,
    currentBid: 0,
    status: PlayerStatus.UPCOMING,
    imageUrl: 'https://picsum.photos/seed/bumrah/400/400',
    stats: { matches: 120, wickets: 145, economy: 6.8 }
  },
  {
    id: '3',
    name: 'Glenn Maxwell',
    country: 'Australia',
    role: PlayerRole.ALL_ROUNDER,
    basePrice: 150,
    currentBid: 850,
    status: PlayerStatus.SOLD,
    imageUrl: 'https://picsum.photos/seed/maxwell/400/400',
    stats: { matches: 100, runs: 2800, wickets: 35, strikeRate: 155.2 }
  },
  {
    id: '4',
    name: 'Rashid Khan',
    country: 'Afghanistan',
    role: PlayerRole.BOWLER,
    basePrice: 150,
    currentBid: 1200,
    status: PlayerStatus.SOLD,
    imageUrl: 'https://picsum.photos/seed/rashid/400/400',
    stats: { matches: 95, wickets: 130, economy: 6.5 }
  }
];

export const MOCK_TEAMS: Team[] = [
  { id: 't1', name: 'Mumbai Indians', budget: 4500, logo: 'MI', playersBought: ['1', '4'] },
  { id: 't2', name: 'Chennai Super Kings', budget: 5200, logo: 'CSK', playersBought: ['3'] },
  { id: 't3', name: 'Royal Challengers', budget: 3800, logo: 'RCB', playersBought: [] },
];
