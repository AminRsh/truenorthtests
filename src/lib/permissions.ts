import { SubscriptionLevel } from "./subscription";

// Free users only access the first (or a demo) test set
export function canAccessAllTests(subscriptionLevel: SubscriptionLevel) {
    return subscriptionLevel !== "free";
}

// All premium features (AI, analytics, custom study plans, etc.)
export function canAccessPremiumFeatures(subscriptionLevel: SubscriptionLevel) {
    return subscriptionLevel !== "free";
}

// Used to restrict free users to 1 test set (e.g. "demo" or "set 1")
export function getAccessibleTestSetIds(subscriptionLevel: SubscriptionLevel): string[] {
    if (subscriptionLevel === "free") {
        return ["test-set-1"]; // adjust this ID to match your DB
    }
    return ["all"]; // special keyword to represent access to all
}
