import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, Sparkles, Home, ArrowRight, Star } from "lucide-react";

export default function SuccessPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col items-center justify-center px-4 relative overflow-hidden">
            {/* Static celebration elements */}
            <StaticCelebration />

            <div className="max-w-md w-full bg-white rounded-xl shadow-xl overflow-hidden p-8 mx-auto relative z-10">
                <div className="flex justify-center mb-6">
                    <div className="rounded-full bg-green-100 p-3">
                        <CheckCircle className="h-12 w-12 text-green-600" />
                    </div>
                </div>

                <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">Payment Successful!</h1>
                <div className="flex items-center justify-center gap-2 mb-6">
                    <Sparkles className="h-5 w-5 text-amber-500" />
                    <h2 className="text-xl font-semibold text-amber-500">Pro Account Activated</h2>
                    <Sparkles className="h-5 w-5 text-amber-500" />
                </div>

                <div className="bg-green-50 border border-green-100 rounded-lg p-4 mb-6">
                    <p className="text-gray-700 text-center">
                        Thank you for your purchase! Your payment has been processed successfully and your Pro account benefits are now active.
                    </p>
                </div>

                <div className="flex flex-col space-y-4">
                    <Button asChild className="bg-green-600 hover:bg-green-700 w-full">
                        <Link href="/dashboard" className="flex items-center justify-center gap-2">
                            <span>Go to Dashboard</span>
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </Button>

                    <Button asChild variant="outline" className="w-full">
                        <Link href="/home" className="flex items-center justify-center gap-2">
                            <Home className="h-4 w-4" />
                            <span>Return to Home</span>
                        </Link>
                    </Button>
                </div>
            </div>

            <div className="mt-8 text-center text-gray-500 text-sm relative z-10">
                <p>A confirmation email has been sent to your inbox.</p>
                <p className="mt-1">Need help? <Link href="/support" className="text-green-600 hover:underline">Contact our support team</Link></p>
            </div>
        </div>
    );
}

// Static celebration elements using absolute positioning
function StaticCelebration() {
    return (
        <>
            {/* Top left celebration */}
            <div className="absolute top-12 left-12 text-green-500 animate-bounce">
                <Star className="h-8 w-8" />
            </div>

            {/* Top right celebration */}
            <div className="absolute top-24 right-16 text-yellow-500 animate-pulse">
                <Sparkles className="h-10 w-10" />
            </div>

            {/* Bottom left celebration */}
            <div className="absolute bottom-20 left-20 text-blue-500 animate-pulse">
                <Sparkles className="h-6 w-6" />
            </div>

            {/* Bottom right celebration */}
            <div className="absolute bottom-16 right-24 text-purple-500 animate-bounce">
                <Star className="h-8 w-8" />
            </div>

            {/* Decorative circles */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-green-100 opacity-20"></div>
            <div className="absolute bottom-1/4 right-1/3 w-40 h-40 rounded-full bg-amber-100 opacity-20"></div>
            <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-blue-100 opacity-20"></div>
        </>
    );
}