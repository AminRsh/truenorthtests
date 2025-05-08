"use server";

import { validateRequest } from "@/auth";
import { env } from "@/env";
import stripe from "@/lib/stripe";
import Stripe from "stripe";

export async function createCheckoutSession(priceId: string) {
    const user = await validateRequest();
    
    if (!user) {
        throw new Error("Unauthorized");
    }

    // const stripeCustomerId = user.user?.id as| string | undefined;

    const session = await stripe.checkout.sessions.create({
        // payment_method_types: ['card'],
        // billing_address_collection: 'auto',
    
        line_items: [{ price: priceId, quantity: 1 }],
        mode: "subscription",
        success_url: `${env.NEXT_PUBLIC_BASE_URL}/billing/success`,
        cancel_url: `${env.NEXT_PUBLIC_BASE_URL}/billing`,
        // customer: stripeCustomerId || undefined,
        // customer_email: stripeCustomerId
        //     ? undefined
        //     : user.user?.email,
        // metadata: {
        //     userId: user.user?.id,
        // },
        subscription_data: {
            metadata: {
                userId: user.user?.id,
            },
        },
        custom_text: {
            terms_of_service_acceptance: {
                message: `I have read TrueNorthTests's [terms of service](${env.NEXT_PUBLIC_BASE_URL}/tos) and agree to them.`,
            },
        },
        consent_collection: {
            terms_of_service: "required",
        },
    } as Stripe.Checkout.SessionCreateParams)

    if (!session.url) {
        throw new Error("Failed to create checkout session");
    }

    return session.url;
}