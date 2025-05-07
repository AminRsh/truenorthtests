import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
    server: {
        DATABASE_URL: z.string().min(1),
        STRIPE_SECRET_KEY: z.string().min(1),
    },
    client: {
        NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string().min(1),
        NEXT_PUBLIC_STRIPE_PRICE_ID_MONTHLY: z.string().min(1),
        NEXT_PUBLIC_STRIPE_PRICE_ID_WEEKLY: z.string().min(1),
        NEXT_PUBLIC_STRIPE_PRICE_ID_YEARLY: z.string().min(1),
        NEXT_PUBLIC_BASE_URL: z.string().min(1),
    },
    experimental__runtimeEnv: {
        NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:
            process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
        NEXT_PUBLIC_STRIPE_PRICE_ID_MONTHLY:
            process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_MONTHLY,
        NEXT_PUBLIC_STRIPE_PRICE_ID_WEEKLY:
            process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_WEEKLY,
        NEXT_PUBLIC_STRIPE_PRICE_ID_YEARLY:
            process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_YEARLY,
        NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    },
});
