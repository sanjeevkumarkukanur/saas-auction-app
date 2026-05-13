// libs/common/src/interfaces/jwt-user.interface.ts
export interface JwtUser {
  userId: string;
  email: string;
  tenantId: string;
  roles: string[];
  permissions: string[];
}
