"use server";

import { validateRequest } from "@/auth";
import { env } from "@/env";
import stripe from "@/lib/stripe";


export async function createCustomerPortalSession() {
    const user = await validateRequest();

    if (!user) {
        throw new Error("Unauthorized");
    }

    const stripeCustomerId = user.user?.id as
        | string
        | undefined;

    if (!stripeCustomerId) {
        throw new Error("Stripe customer ID not found");
    }

    const session = await stripe.billingPortal.sessions.create({
        customer: stripeCustomerId,
        return_url: `${env.NEXT_PUBLIC_BASE_URL}/billing`,
    });

    if (!session.url) {
        throw new Error("Failed to create customer portal session");
    }

    return session.url;
}