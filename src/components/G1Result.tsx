
import { CheckCircle, XCircle } from 'lucide-react';
import Link from 'next/link';

type Question = {
    image: string;
    options: string[];
    correctIndex: number;
    explanation: string;
};

interface G1ResultProps {
    score: number;
    questions: Question[];
    passed: boolean;
}

export default function G1Result({
    score,
    questions,
    passed,
}: G1ResultProps) {
    return (
        <div className="flex items-center justify-center min-h-[60vh] px-4">
            <div className="bg-white rounded-2xl shadow-xl border p-8 w-full max-w-lg text-center space-y-6">
                {passed ? (
                    <CheckCircle className="w-14 h-14 mx-auto text-green-600" />
                ) : (
                    <XCircle className="w-14 h-14 mx-auto text-red-600" />
                )}
                
                <h2 className="text-2xl font-bold">Exam Complete 🎉</h2>
                
                <p className="text-lg">
                    You scored <span className="font-semibold">{score}</span> out of {questions.length}
                </p>
                
                <p className={`text-xl font-semibold ${passed ? 'text-green-600' : 'text-red-600'}`}>
                    {passed ? '✅ You passed the exam!' : '❌ You failed. Try again!'}
                </p>
                
                {passed ? (
                    <Link href="/g2-test">
                        <button className="mt-2 px-5 py-2.5 rounded-xl transition bg-blue-600 text-white hover:bg-blue-700">
                            Next Test
                        </button>
                    </Link>
                ) : (
                    <Link href="?reset=true">
                        <button className="mt-2 px-5 py-2.5 rounded-xl transition bg-red-600 text-white hover:bg-red-700">
                            Try Again
                        </button>
                    </Link>
                )}
            </div>
        </div>
    );
}