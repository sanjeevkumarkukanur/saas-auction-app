export class UpdateSubscriptionDto {
  planId?: string;
  status?: 'active' | 'trialing' | 'past_due' | 'canceled';

  stripeCustomerId?: string;
  stripeSubId?: string;

  trialEnd?: Date;
  currentPeriodEnd?: Date;
}
