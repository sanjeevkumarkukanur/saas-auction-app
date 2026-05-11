export enum MatchStatus {
  SCHEDULED     = 'SCHEDULED',
  LIVE          = 'LIVE',
  INNINGS_BREAK = 'INNINGS_BREAK',
  COMPLETED     = 'COMPLETED',
  ABANDONED     = 'ABANDONED',
  CANCELLED     = 'CANCELLED',
}

export enum WinType {
  RUNS       = 'RUNS',
  WICKETS    = 'WICKETS',
  TIE        = 'TIE',
  SUPER_OVER = 'SUPER_OVER',
  NO_RESULT  = 'NO_RESULT',
}

export enum TimelineType {
  MATCH_START   = 'MATCH_START',
  OVER_COMPLETE = 'OVER_COMPLETE',
  FOUR          = 'FOUR',
  SIX           = 'SIX',
  WICKET        = 'WICKET',
  RUN           = 'RUN',
  EXTRA         = 'EXTRA',
  INNINGS_END   = 'INNINGS_END',
  MATCH_END     = 'MATCH_END',
}