"use client";
interface TestResult {
    date: string;
    name: string;
    score: number;
    accuracy: string;
    accuracyPercentage: number;
}

interface TestResultsTableProps {
    testResults: TestResult[];
}

export default function TestResultsTable({ testResults }: TestResultsTableProps) {
    return (
        <div className="px-4 py-3 @container">
            <div className="flex overflow-hidden rounded-xl border border-[#d0dbe7] bg-slate-50">
                <table className="flex-1">
                    <thead>
                        <tr className="bg-slate-50">
                            <th className="table-column-date px-4 py-3 text-left text-[#0e141b] w-[400px] text-sm font-medium leading-normal">
                                Date
                            </th>
                            <th className="table-column-name px-4 py-3 text-left text-[#0e141b] w-[400px] text-sm font-medium leading-normal">
                                Test Name
                            </th>
                            <th className="table-column-score px-4 py-3 text-left text-[#0e141b] w-[400px] text-sm font-medium leading-normal">
                                Score
                            </th>
                            <th className="table-column-accuracy px-4 py-3 text-left text-[#0e141b] w-[400px] text-sm font-medium leading-normal">
                                Accuracy
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {testResults.map((result, index) => (
                            <tr key={index} className="border-t border-t-[#d0dbe7]">
                                <td className="table-column-date h-[72px] px-4 py-2 w-[400px] text-[#4e7397] text-sm font-normal leading-normal">
                                    {result.date}
                                </td>
                                <td className="table-column-name h-[72px] px-4 py-2 w-[400px] text-[#0e141b] text-sm font-normal leading-normal">
                                    {result.name}
                                </td>
                                <td className="table-column-score h-[72px] px-4 py-2 w-[400px] text-[#4e7397] text-sm font-normal leading-normal">
                                    {result.score}
                                </td>
                                <td className="table-column-accuracy h-[72px] px-4 py-2 w-[400px] text-sm font-normal leading-normal">
                                    <div className="flex items-center gap-3">
                                        <div className="w-[88px] overflow-hidden rounded-sm bg-[#d0dbe7]">
                                            <div className="h-1 rounded-full bg-[#1980e6]" style={{ width: `${result.accuracyPercentage}%` }}></div>
                                        </div>
                                        <p className="text-[#0e141b] text-sm font-medium leading-normal">{result.accuracy}</p>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <style jsx>{`
                @container(max-width:120px){.table-column-date{display: none;}}
                @container(max-width:240px){.table-column-name{display: none;}}
                @container(max-width:360px){.table-column-score{display: none;}}
                @container(max-width:480px){.table-column-accuracy{display: none;}}
        `}</style>
        </div>
    );
}