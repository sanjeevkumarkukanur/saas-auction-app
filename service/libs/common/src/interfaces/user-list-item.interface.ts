import type { RoleInterface } from './role.interface';

export interface UserListItemInterface {
  id: string;

  email: string | null;

  name: string | null;

  phone: string | null;

  roleId: string | null;

  role: RoleInterface | null;

  tenantId: string | null;

  createdAt: Date;
}
