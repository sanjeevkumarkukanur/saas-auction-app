export interface JwtPayload {
  sub: string; // user ID
  email: string;
  tenantId: string;
  role: string; // 'admin' | 'owner' | 'player' | 'viewer'
  iat?: number; // issued at
  exp?: number; // expiration
}
