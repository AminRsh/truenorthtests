export default function ProgressBar({ percentage }: { percentage: number }) {
    return (
        <div className="rounded bg-[#d0dbe7]">
            <div className="h-2 rounded bg-[#1980e6]" style={{ width: `${percentage}%` }}></div>
        </div>
    );
}