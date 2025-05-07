"use client";

import { env } from "@/env";
import { useToast } from "@/hooks/use-toast";
import usePremiumModal from "@/hooks/usePremiumModal";
import { Check, CreditCard, Calendar, Trophy } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../ui/dialog";
import { createCheckoutSession } from "./actions";



export default function PremiumModal() {

    const { open, setOpen } = usePremiumModal();
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState("monthly");


    const plans = [
        {
            id: "weekly",
            title: "Weekly",
            price: "3.98",
            priceId: env.NEXT_PUBLIC_STRIPE_PRICE_ID_WEEKLY,
            icon: <CreditCard className="h-6 w-6" />,
            features: ["Full access to all premium features", "Weekly billing", "Cancel anytime"],
            recommended: false
        },
        {
            id: "monthly",
            title: "Monthly",
            price: "6.98",
            priceId: env.NEXT_PUBLIC_STRIPE_PRICE_ID_MONTHLY,
            icon: <Calendar className="h-6 w-6" />,
            features: ["Full access to all premium features", "Monthly billing", "Save 12% vs weekly"],
            recommended: true
        },
        {
            id: "yearly",
            title: "Yearly",
            price: "12.00",
            priceId: env.NEXT_PUBLIC_STRIPE_PRICE_ID_YEARLY,
            icon: <Trophy className="h-6 w-6" />,
            features: ["Full access to all premium features", "Annual billing", "Best value"],
            recommended: false
        }
    ];
    async function handlePremiumClick(priceId: string) {
        try {
            setLoading(true);
            const redirectUrl = await createCheckoutSession(priceId);
            window.location.href = redirectUrl;
        } catch (error) {
            console.error(error);
            toast({
                variant: "destructive",
                description: "Something went wrong. Please try again.",
            });
        } finally {
            setLoading(false);
        }
    }

    return (
        <Dialog
            open={open}
            onOpenChange={(open) => {
                if (!loading) {
                    setOpen(open);
                }
            }}
        >
            <DialogContent className="max-w-4xl top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-1/4 fixed">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 ">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold ">Upgrade to Premium</DialogTitle>
                        <DialogDescription className="text-blue-800 text-lg">
                            Take your test preparation to the next level
                        </DialogDescription>
                    </DialogHeader>
                </div>

                <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                    <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-3">
                        {plans.map((plan) => (
                            <div
                                key={plan.id}
                                className={`relative rounded-lg border-2 p-6 transition-all ${selectedPlan === plan.id
                                        ? "border-blue-500 bg-blue-50"
                                        : "border-gray-200 hover:border-blue-300"
                                    }`}
                                onClick={() => setSelectedPlan(plan.id)}
                            >
                                {plan.recommended && (
                                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                                        POPULAR
                                    </div>
                                )}

                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="p-2 rounded-full bg-blue-100 text-blue-600">
                                            {plan.icon}
                                        </div>
                                        <h3 className="text-lg font-bold">{plan.title}</h3>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <span className="text-3xl font-bold">${plan.price}</span>
                                    <span className="text-gray-500 ml-1">CAD</span>
                                </div>

                                <ul className="space-y-3 mb-6">
                                    {plan.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <Check className="size-5 text-green-500 shrink-0 mt-0.5" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <Button
                                    className={`w-full ${selectedPlan === plan.id
                                            ? "bg-blue-600 hover:bg-blue-700"
                                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                        }`}
                                    onClick={() => handlePremiumClick(plan.priceId)}
                                    disabled={loading}
                                >
                                    {selectedPlan === plan.id ? "Get Started" : "Select Plan"}
                                </Button>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 text-center text-sm text-gray-500">
                        By upgrading, you agree to our terms of service and privacy policy.
                        <br />All plans include a 7-day money-back guarantee.
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}