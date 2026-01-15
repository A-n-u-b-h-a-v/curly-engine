export const SUBSCRIPTION_PLANS = {
import { SubscriptionPlan } from '@/lib/constants/subscription';
    FREE: "free",
    PRO: "pro",
  } as const;
  
  export type SubscriptionPlan =
    (typeof SUBSCRIPTION_PLANS)[keyof typeof SUBSCRIPTION_PLANS];
  
    enum SubscriptionPlan{
      FREE="free",
      PRO="pro"
    }
    