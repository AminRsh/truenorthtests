import { validateRequest } from "@/auth";
import { Home } from "lucide-react";
import SessionProvider from "./SessionProvider";
import PremiumModal from "@/components/premium/PremiumModal";

export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await validateRequest();

    return (
        <SessionProvider value={session}>
            {children}
            <PremiumModal />
            <button className="fixed bottom-5 right-5 bg-white text-black p-3 rounded-full">
                <a href="/" target="_blank">
                    <Home size={24} />
                </a>
            </button>
        </SessionProvider>
    );
}