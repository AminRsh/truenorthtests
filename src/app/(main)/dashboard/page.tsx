
import Sidebar from '@/components/Sidebar';
import ProgressBar from '@/components/ProgressBar';
import StatCard from '@/components/StatCard';
import TestResultsTable from '@/components/TestResultsTable';
import PremiumBanner from '@/components/PremiumBanner';

export default function Dashboard() {
    const stats = [
        { title: 'Score', value: '560' },
        { title: 'Tests Taken', value: '4' },
        { title: 'Accuracy', value: '78%' }
    ];

    const testResults = [
        {
            date: 'October 26, 2024',
            name: 'Practice Test 1',
            score: 520,
            accuracy: '82',
            accuracyPercentage: 93.1818
        },
        {
            date: 'October 20, 2024',
            name: 'Practice Test 2',
            score: 580,
            accuracy: '75',
            accuracyPercentage: 85.2273
        },
        {
            date: 'October 14, 2024',
            name: 'Practice Test 3',
            score: 540,
            accuracy: '80',
            accuracyPercentage: 90.9091
        }
    ];

    return (
        <div className="layout-container flex h-full grow flex-col">
            <div className="gap-1 px-6 flex flex-1 justify-center py-5">
                <Sidebar />
                <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                    <div className="flex flex-wrap justify-between gap-3 p-4">
                        <div className="flex min-w-72 flex-col gap-3">
                            <p className="text-[#0e141b] tracking-light text-[32px] font-bold leading-tight">Dashboard</p>
                            <p className="text-[#4e7397] text-sm font-normal leading-normal">Welcome, Evelyn Brooks!</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 p-4">
                        <div className="flex gap-6 justify-between">
                            <p className="text-[#0e141b] text-base font-medium leading-normal">Overall Progress</p>
                        </div>
                        <ProgressBar percentage={70} />
                    </div>

                    <div className="flex flex-wrap gap-4 p-4">
                        {stats.map((stat, index) => (
                            <StatCard key={index} title={stat.title} value={stat.value} />
                        ))}
                    </div>

                    <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                        Recent Test Results
                    </h2>

                    <TestResultsTable testResults={testResults} />

                    <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                        Go Premium
                    </h2>

                    <div className="p-4">
                        <PremiumBanner />
                    </div>
                </div>
            </div>
        </div>
    );
}


