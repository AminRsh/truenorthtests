export default function PremiumBanner() {
    return (
        <div className="flex items-stretch justify-between gap-4 rounded-xl bg-slate-50 p-4 shadow-[0_0_4px_rgba(0,0,0,0.1)]">
            <div className="flex flex-[2_2_0px] flex-col gap-4">
                <div className="flex flex-col gap-1">
                    <p className="text-[#0e141b] text-base font-bold leading-tight">Upgrade to unlock premium features</p>
                    <p className="text-[#4e7397] text-sm font-normal leading-normal">
                        Get access to unlimited tests, advanced analytics, and personalized study plans
                    </p>
                </div>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 flex-row-reverse bg-[#e7edf3] text-[#0e141b] pr-2 gap-1 text-sm font-medium leading-normal w-fit">
                    <div className="text-[#0e141b]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
                            <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                        </svg>
                    </div>
                    <span className="truncate">Upgrade Now</span>
                </button>
            </div>
            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                style={{ backgroundImage: "url('https://cdn.usegalileo.ai/sdxl10/11279646-be6e-4fd9-bf68-c195ff8cdcba.png')" }}></div>
        </div>
    );
}