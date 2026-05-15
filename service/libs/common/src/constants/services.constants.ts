// ── Gateway ───────────────────────────────────
export const GATEWAY_PORT = 3000;

// ── TCP services (sync — need immediate response) ──
export const SERVICE_PORTS = {
  AUTH: 4000,
  GAME: 4001,
  LEAGUE: 4002,
  TEAM: 4003,
  PLAYER: 4004,
  AUCTION: 4005,
  TENANT: 4006,
  BILLING: 4007,
  FIELD: 4010,
  TOURNAMENT: 4011,
  MATCH: 4012,
  STATS: 4013,
  PLATFORM: 4014,
} as const;

// ── RMQ services (async — background/events) ──
export const SERVICE_QUEUES = {
  NOTIFICATION_SERVICE: 'notification_queue', // ← send emails/push
  REALTIME_SERVICE: 'realtime_queue', // ← websocket events
} as const;

// ── service injection tokens ──────────────────
export const SERVICES = {
  // TCP
  AUTH_SERVICE: 'AUTH_SERVICE',
  GAME_SERVICE: 'GAME_SERVICE',
  LEAGUE_SERVICE: 'LEAGUE_SERVICE',
  TEAM_SERVICE: 'TEAM_SERVICE',
  PLAYER_SERVICE: 'PLAYER_SERVICE',
  AUCTION_SERVICE: 'AUCTION_SERVICE',
  TENANT_SERVICE: 'TENANT_SERVICE',
  BILLING_SERVICE: 'BILLING_SERVICE',
  FIELD_SERVICE: 'FIELD_SERVICE',
  TOURNAMENT_SERVICE: 'TOURNAMENT_SERVICE',
  MATCH_SERVICE: 'MATCH_SERVICE',
  STATS_SERVICE: 'STATS_SERVICE',
  PLATFORM_SERVICE: 'PLATFORM_SERVICE',

  // RMQ
  NOTIFICATION_SERVICE: 'NOTIFICATION_SERVICE',
  REALTIME_SERVICE: 'REALTIME_SERVICE',
} as const;

export type ServiceName = keyof typeof SERVICES;
export type ServicePort = (typeof SERVICE_PORTS)[keyof typeof SERVICE_PORTS];
export type ServiceQueue = (typeof SERVICE_QUEUES)[keyof typeof SERVICE_QUEUES];
