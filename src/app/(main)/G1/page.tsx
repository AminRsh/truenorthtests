import Link from "next/link";
import { Car, BookOpen, Trophy, Star, Clock, CheckCircle, ArrowRight, Zap } from 'lucide-react';

export default function Page() {
    const testCount = 10;

    const testData = [
        { difficulty: 'Beginner', time: '15 min', questions: 20, icon: '🟢' },
        { difficulty: 'Beginner', time: '15 min', questions: 20, icon: '🟢' },
        { difficulty: 'Intermediate', time: '18 min', questions: 25, icon: '🟡' },
        { difficulty: 'Intermediate', time: '18 min', questions: 25, icon: '🟡' },
        { difficulty: 'Advanced', time: '20 min', questions: 30, icon: '🟠' },
        { difficulty: 'Advanced', time: '20 min', questions: 30, icon: '🟠' },
        { difficulty: 'Expert', time: '25 min', questions: 35, icon: '🔴' },
        { difficulty: 'Expert', time: '25 min', questions: 35, icon: '🔴' },
        { difficulty: 'Expert', time: '25 min', questions: 35, icon: '🔴' },
        { difficulty: 'Expert', time: '25 min', questions: 35, icon: '🔴' },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-40 left-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse" style={{ animationDelay: '4s' }}></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 animate-bounce">
                <Car className="w-8 h-8 text-blue-600 opacity-70" />
            </div>
            <div className="absolute top-40 right-20 animate-bounce" style={{ animationDelay: '1s' }}>
                <Trophy className="w-6 h-6 text-blue-500 opacity-70" />
            </div>
            <div className="absolute bottom-40 left-20 animate-bounce" style={{ animationDelay: '2s' }}>
                <Star className="w-7 h-7 text-blue-400 opacity-70" />
            </div>

            <div className="relative z-10 container mx-auto px-4 py-8">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-6 shadow-2xl animate-pulse">
                        <Car className="w-10 h-10 text-white" />
                    </div>

                    <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent mb-4">
                        G1 Practice Tests
                    </h1>

                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Master your Ontario G1 knowledge test with our comprehensive practice exams.
                        Each test is designed to simulate the real exam experience.
                    </p>

                    <div className="flex justify-center items-center gap-8 mt-8">
                        <div className="flex items-center gap-2 text-green-600">
                            <CheckCircle className="w-5 h-5" />
                            <span className="text-sm font-medium">Updated 2024</span>
                        </div>
                        <div className="flex items-center gap-2 text-blue-600">
                            <BookOpen className="w-5 h-5" />
                            <span className="text-sm font-medium">Official Questions</span>
                        </div>
                        <div className="flex items-center gap-2 text-blue-500">
                            <Zap className="w-5 h-5" />
                            <span className="text-sm font-medium">Instant Results</span>
                        </div>
                    </div>
                </div>

                {/* Tests Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {[...Array(testCount)].map((_, index) => {
                        const test = testData[index];

                        return (
                            <div key={index} className="group relative">
                                <div className="relative bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/60 shadow-xl transform transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:border-blue-400/30 hover:bg-white">

                                    {/* Glow Effect */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity group-hover:bg-blue-400/30 duration-300"></div>

                                    {/* Test Number Badge */}
                                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm shadow-lg">
                                        {index + 1}
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="text-2xl animate-pulse">{test.icon}</div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-800">Test #{index + 1}</h3>
                                                <p className="text-sm text-gray-600">{test.difficulty}</p>
                                            </div>
                                        </div>

                                        <div className="space-y-3 mb-6">
                                            <div className="flex items-center justify-between text-sm">
                                                <div className="flex items-center gap-2 text-gray-600">
                                                    <Clock className="w-4 h-4" />
                                                    <span>{test.time}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-gray-600">
                                                    <BookOpen className="w-4 h-4" />
                                                    <span>{test.questions} questions</span>
                                                </div>
                                            </div>

                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div
                                                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-300"
                                                    style={{ width: `${Math.min(85, 40 + index * 8)}%` }}
                                                ></div>
                                            </div>
                                        </div>

                                        <Link href={`/G1/${index + 1}`}>
                                            <button className="w-full py-3 px-4 rounded-xl font-semibold bg-gray-100 text-blue-500 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transform transition-all duration-200 shadow-lg hover:shadow-2xl flex items-center justify-center gap-2">
                                                <span className="text-blue-500">Start Test</span>
                                                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                            </button>
                                        </Link>
                                    </div>
                                </div>

                                {/* Hover Glow */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-blue-600/10 blur-xl transition-opacity duration-300 -z-10 opacity-0 group-hover:opacity-100"></div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Stats */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-8 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 border border-blue-200/60 shadow-lg">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-800">10,000+</div>
                            <div className="text-sm text-gray-600">Tests Completed</div>
                        </div>
                        <div className="w-px h-8 bg-gray-300"></div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-800">95%</div>
                            <div className="text-sm text-gray-600">Pass Rate</div>
                        </div>
                        <div className="w-px h-8 bg-gray-300"></div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-gray-800">★ 4.9</div>
                            <div className="text-sm text-gray-600">User Rating</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}