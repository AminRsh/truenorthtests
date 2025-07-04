import { env } from "@/env";
import { cache } from "react";
import prisma from "./prisma";

export type SubscriptionLevel = "free" | "weekly" | "monthly" | "yearly";

export const getUserSubscriptionLevel = cache(
    async (userId: string): Promise<SubscriptionLevel> => {
        const subscription = await prisma.userSubscription.findUnique({
            where: {
                userId,
            },
        });

        if (!subscription || subscription.stripeCurrentPeriodEnd < new Date()) {
            return "free";
        }

        switch (subscription.stripePriceId) {
            case env.NEXT_PUBLIC_STRIPE_PRICE_ID_WEEKLY:
                return "weekly";
            case env.NEXT_PUBLIC_STRIPE_PRICE_ID_MONTHLY:
                return "monthly";
            case env.NEXT_PUBLIC_STRIPE_PRICE_ID_YEARLY:
                return "yearly";
            default:
                throw new Error("Invalid subscription");
        }
    }
);
