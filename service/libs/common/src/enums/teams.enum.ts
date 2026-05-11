export enum TeamStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  PENDING = 'PENDING',
  SUSPENDED = 'SUSPENDED',
  LOCKED = 'LOCKED'
}

export interface CreateTeamOwnerDbDto {
  tenantId: string;
  teamId?: string;
  seasonTeamId?: string | null;
  ownerId: string;
  ownerName: string;
  email?: string;
  countryCode?: string;
  phone?: string;
}