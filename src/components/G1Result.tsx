import { Question } from '@/lib/types';
import { CheckCircle, XCircle, Trophy, RotateCcw, ArrowRight, Star, Target } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface G1ResultProps {
    score: number;
    questions: Question[];
    passed: boolean;
    id: string;
}

export default function G1Result({ score, questions, passed, id }: G1ResultProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [scoreAnimation, setScoreAnimation] = useState(0);
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        
        // Animate score counting
        const duration = 1500;
        const increment = score / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= score) {
                setScoreAnimation(score);
                clearInterval(timer);
                if (passed) {
                    setShowConfetti(true);
                    setTimeout(() => setShowConfetti(false), 3000);
                }
            } else {
                setScoreAnimation(Math.floor(current));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [score, passed]);

    const percentage = Math.round((score / questions.length) * 100);
    const passPercentage = 80; // Assuming 80% is passing

    return (
        <div className="flex items-center justify-center min-h-[60vh] px-4 relative">
            {/* Confetti effect */}
            {showConfetti && (
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(50)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-bounce"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 2}s`,
                                animationDuration: `${2 + Math.random() * 2}s`
                            }}
                        />
                    ))}
                </div>
            )}

            <div className={`transition-all duration-1000 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 w-full max-w-md text-center space-y-8 relative">
                    {/* Glassmorphism overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-3xl"></div>
                    
                    <div className="relative z-10">
                        {/* Status Icon with animation */}
                        <div className="relative">
                            {passed ? (
                                <div className="relative">
                                    <CheckCircle className="w-20 h-20 mx-auto text-green-400 animate-bounce" />
                                    <div className="absolute -top-2 -right-2">
                                        <Trophy className="w-8 h-8 text-yellow-400 animate-pulse" />
                                    </div>
                                </div>
                            ) : (
                                <div className="relative">
                                    <XCircle className="w-20 h-20 mx-auto text-red-400 animate-pulse" />
                                    <div className="absolute -top-2 -right-2">
                                        <Target className="w-8 h-8 text-orange-400 animate-spin" />
                                    </div>
                                </div>
                            )}
                        </div>

                        <h2 className="text-3xl font-bold text-white mb-4 tracking-wide">Exam Complete</h2>

                        {/* Score Circle */}
                        <div className="relative w-32 h-32 mx-auto mb-6">
                            <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    stroke="currentColor"
                                    strokeWidth="8"
                                    fill="transparent"
                                    className="text-white/20"
                                />
                                <circle
                                    cx="50"
                                    cy="50"
                                    r="40"
                                    stroke="currentColor"
                                    strokeWidth="8"
                                    fill="transparent"
                                    strokeDasharray={`${percentage * 2.51} 251`}
                                    className={`transition-all duration-1000 ease-out ${
                                        passed ? 'text-green-400' : 'text-red-400'
                                    }`}
                                    strokeLinecap="round"
                                />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <div className={`text-2xl font-bold ${passed ? 'text-green-400' : 'text-red-400'}`}>
                                        {scoreAnimation}
                                    </div>
                                    <div className="text-sm text-white/70">
                                        / {questions.length}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Percentage */}
                        <div className="mb-6">
                            <div className={`text-4xl font-bold ${passed ? 'text-green-400' : 'text-red-400'}`}>
                                {percentage}%
                            </div>
                            <div className="text-white/70 text-sm mt-1">
                                {passed ? `Above ${passPercentage}% required` : `Below ${passPercentage}% required`}
                            </div>
                        </div>

                        {/* FIXED: Changed <p> to <div> to avoid hydration error */}
                        <div className={`text-xl font-semibold mb-8 ${passed ? 'text-green-400' : 'text-red-400'}`}>
                            {passed ? (
                                <div className="flex items-center justify-center gap-2">
                                    <Star className="w-5 h-5 animate-pulse" />
                                    ✅ You passed the exam!
                                    <Star className="w-5 h-5 animate-pulse" />
                                </div>
                            ) : (
                                <div className="flex items-center justify-center gap-2">
                                    <RotateCcw className="w-5 h-5 animate-spin" />
                                    ❌ You failed. Try again!
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
                            <Link href={`/G1/${Number(id) + 1}`}>
                                <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold transition-all duration-300 hover:from-blue-600 hover:to-purple-700 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-2 min-w-[140px]">
                                    <span>Next Test</span>
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                </button>
                            </Link>

                            <Link href={`/G1/${id}?reset=true`}>
                                <button className="group relative px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-xl font-semibold transition-all duration-300 hover:from-red-600 hover:to-pink-700 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 flex items-center justify-center gap-2 min-w-[140px]">
                                    <RotateCcw className="w-4 h-4 transition-transform group-hover:rotate-180" />
                                    <span>Try Again</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-pink-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                </button>
                            </Link>
                        </div>

                        {/* Performance Indicator */}
                        <div className="mt-6 pt-6 border-t border-white/20">
                            <div className="text-white/70 text-sm">
                                Performance Rating
                            </div>
                            <div className="flex justify-center mt-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-4 h-4 ${
                                            i < Math.ceil(percentage / 20) ? 'text-yellow-400 fill-current' : 'text-white/30'
                                        } transition-all duration-300 delay-${i * 100}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}