export class ChangeSubscriptionStatusDto {
  status: 'active' | 'trialing' | 'past_due' | 'canceled';
}
