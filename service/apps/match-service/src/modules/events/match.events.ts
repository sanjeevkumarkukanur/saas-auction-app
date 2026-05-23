export const MatchEvents = {
  MATCH_COMPLETED: 'match.completed',
  SCORE_UPDATED: 'match.scoreUpdated',
  MATCH_STARTED: 'match.started',
  MATCH_ABANDONED: 'match.abandoned',
} as const;

export type MatchEventKey = (typeof MatchEvents)[keyof typeof MatchEvents];
