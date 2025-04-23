interface StatCardProps {
    title: string;
    value: string | number;
}

export default function StatCard({ title, value }: StatCardProps) {
    return (
        <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#e7edf3]">
            <p className="text-[#0e141b] text-base font-medium leading-normal">{title}</p>
            <p className="text-[#0e141b] tracking-light text-2xl font-bold leading-tight">{value}</p>
        </div>
    );
}