import type { PermissionInterface } from './permission.interface';

export interface RoleInterface {
  id: string;

  name: string;

  slug: string;

  description?: string | null;

  permissions?: PermissionInterface[];
}
