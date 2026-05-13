export const TENANT_FEATURES = {
  TURF: {
    league: false,
    season: false,
    auction: false,
  },
  CORPORATE: {
    league: true,
    season: true,
    auction: true,
  },
  ORGANIZER: {
    league: true,
    season: true,
    auction: true,
  },
};

export enum TenantType {
  TURF = 'TURF',
  CORPORATE = 'CORPORATE',
  ORGANIZER = 'ORGANIZER',
}
