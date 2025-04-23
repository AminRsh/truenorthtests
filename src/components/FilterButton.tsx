export default function FilterButton({ label }: { label: string }) {
    return (
        <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#e7edf3] pl-4 pr-4">
            <p className="text-[#0e141b] text-sm font-medium leading-normal">{label}</p>
        </div>
    );
}