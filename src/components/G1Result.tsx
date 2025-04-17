'use client';

import { CheckCircle, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

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
    onReset: () => void;
}

export default function G1Result({
    score,
    questions,
    passed,
    onReset
}: G1ResultProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center min-h-[60vh] px-4"
        >
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

                <button
                    onClick={onReset}
                    className="mt-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
                >
                    Try Again
                </button>
            </div>
        </motion.div>
    );
}
