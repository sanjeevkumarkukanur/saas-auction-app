export interface TenantContext {
  id: string;
  name?: string;
  plan?: 'free' | 'basic' | 'pro' | 'enterprise';
  isActive?: boolean;
}
