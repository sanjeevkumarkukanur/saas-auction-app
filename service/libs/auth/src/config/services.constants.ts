// ── Gateway ───────────────────────────────────
export const GATEWAY_PORT = 3000;

// ── TCP services config (sync — need immediate response) ──
export const SERVICE_CONFIG = {
  AUTH_SERVICE: {
    host: 'localhost',
    port: 4000,
  },

  GAME_SERVICE: {
    host: 'localhost',
    port: 4001,
  },

  LEAGUE_SERVICE: {
    host: 'localhost',
    port: 4002,
  },

  TEAM_SERVICE: {
    host: 'localhost',
    port: 4003,
  },

  PLAYER_SERVICE: {
    host: 'localhost',
    port: 4004,
  },

  AUCTION_SERVICE: {
    host: 'localhost',
    port: 4005,
  },

  TENANT_SERVICE: {
    host: 'localhost',
    port: 4006,
  },

  BILLING_SERVICE: {
    host: 'localhost',
    port: 4007,
  },

  FIELD_SERVICE: {
    host: 'localhost',
    port: 4010,
  },

  TOURNAMENT_SERVICE: {
    host: 'localhost',
    port: 4011,
  },

  MATCH_SERVICE: {
    host: 'localhost',
    port: 4012,
  },

  STATS_SERVICE: {
    host: 'localhost',
    port: 4013,
  },

  PLATFORM_SERVICE: {
    host: 'localhost',
    port: 4014,
  },
} as const;

// ── RMQ services (async — background/events) ──
export const SERVICE_QUEUES = {
  NOTIFICATION_SERVICE: {
    queue: 'notification_queue',
  },

  REALTIME_SERVICE: {
    queue: 'realtime_queue',
  },
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

// ── types ─────────────────────────────────────
export type ServiceName = keyof typeof SERVICES;

export type TcpServiceConfig =
  (typeof SERVICE_CONFIG)[keyof typeof SERVICE_CONFIG];

export type RmqServiceConfig =
  (typeof SERVICE_QUEUES)[keyof typeof SERVICE_QUEUES];
