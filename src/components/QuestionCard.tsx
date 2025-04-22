"use client"

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";
import G1Result from "./G1Result";
import { useSearchParams, useParams } from "next/navigation";
import { Question } from "@/lib/types";

export default function QuestionCard({ questions }: { questions: Question[] }) {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [showResult, setShowResult] = useState<boolean>(false);
    const [score, setScore] = useState<number>(0);
    const [answeredQuestions, setAnsweredQuestions] = useState<number>(0);
    const questionRef = useRef<HTMLDivElement>(null);
    
    const searchParams = useSearchParams();
    const params = useParams();
    const id = params?.id?.toString() || '1'; 
    const shouldReset = searchParams.get('reset') === 'true';
    
    useEffect(() => {
        if (shouldReset) {
            handleReset();
            
            if (typeof window !== 'undefined') {
                const newUrl = window.location.pathname;
                window.history.replaceState({}, '', newUrl);
            }
        }
    }, [shouldReset]);

    const question = questions[currentIndex];

    const handleOptionClick = (index: number) => {
        if (!isSubmitted) setSelectedOption(index);
    };

    const handleSubmit = () => {
        if (selectedOption === null) return;

        setIsSubmitted(true);
        setAnsweredQuestions(prev => prev + 1);

        const isCorrect = selectedOption === question.correctIndex;
        if (isCorrect) {
            setScore(prev => prev + 1);
        }
        
        if (currentIndex === questions.length - 1) {
            setTimeout(() => {
                setShowResult(true);
            }, 1000);
        }
    };

    const handleReset = () => {
        setCurrentIndex(0);
        setScore(0);
        setAnsweredQuestions(0);
        setSelectedOption(null);
        setIsSubmitted(false);
        setShowResult(false);
    };

    const handleNext = () => {
        if (questionRef.current) {
            gsap.to(questionRef.current, {
                opacity: 0,
                y: -30,
                duration: 0.3,
                onComplete: () => {
                    setSelectedOption(null);
                    setIsSubmitted(false);

                    const nextIndex = currentIndex + 1;
                    if (nextIndex < questions.length) {
                        setCurrentIndex(nextIndex);

                        
                        gsap.fromTo(
                            questionRef.current,
                            { opacity: 0, y: 30 },
                            { opacity: 1, y: 0, duration: 0.3 }
                        );
                    } else {
                        setShowResult(true);
                    }
                },
            });
        }
    };

    const passed = score >= 16;

    const getImagePlaceholder = (index: number) => {
        return `/assets/images/${index + 1}.png`;
    };

    return (
        <div className="max-w-4xl mx-auto py-8 px-6 bg-white rounded-2xl shadow-lg relative">
            {
                !showResult && (
                    <div className="absolute top-4 right-4 bg-blue-100 p-2 rounded-lg shadow-2xl text-blue-800 text-sm z-10 ">
                        Question: {currentIndex + 1}/20
                        <div className="text-sm">Correct: {score}/{answeredQuestions}</div>
                    </div>
                )
            }

            {showResult ? (
                <div>
                    <G1Result
                        score={score}    
                        questions={questions}                    
                        passed={passed}
                        id={id}
                    />
                </div>
            ) : (
                <div ref={questionRef} className="flex gap-6 flex-col md:flex-row">
                    {/* Options */}
                    <div className="flex-1 space-y-4">
                        <h2 className="text-xl font-bold">What is the purpose of this traffic sign?</h2>
                        <ul className="space-y-2">
                            {question.options.map((option, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleOptionClick(index)}
                                    className={`cursor-pointer p-3 rounded-xl border transition-colors duration-100 
                                        ${selectedOption === index ? 'bg-blue-100 border-blue-500' : 'bg-gray-50 border-gray-300'}
                                        ${isSubmitted && index === question.correctIndex ? 'border-green-500 bg-green-100' : ''}
                                        ${isSubmitted && index === selectedOption && index !== question.correctIndex ? 'border-red-500 bg-red-100' : ''}`}
                                >
                                    {option}
                                </li>
                            ))}
                        </ul>

                        {!isSubmitted && (
                            <button
                                onClick={handleSubmit}
                                disabled={selectedOption === null}
                                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed"
                            >
                                Submit
                            </button>
                        )}

                        {isSubmitted && (
                            <div className="mt-4">
                                {selectedOption === question.correctIndex ? (
                                    <div>
                                        <p className="text-green-600 font-semibold">Correct Answer!</p>
                                        {currentIndex < questions.length - 1 && (
                                            <button
                                                onClick={handleNext}
                                                className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700"
                                            >
                                                Next Question
                                            </button>
                                        )}
                                    </div>
                                ) : (
                                    <>
                                        <p className="text-red-600 font-semibold">Incorrect</p>
                                        <div className="mt-4 space-y-4">
                                            <div className="p-4 border bg-yellow-50 rounded-xl text-yellow-800 border-yellow-400">
                                                <p><strong>Explanation:</strong> {question.explanation}</p>
                                            </div>
                                            {currentIndex < questions.length - 1 && (
                                                <button
                                                    onClick={handleNext}
                                                    className="px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700"
                                                >
                                                    Next Question
                                                </button>
                                            )}
                                        </div>
                                    </>
                                )}
                            </div>
                        )}

                    </div>

                    <div className="flex items-center justify-center ">
                            <Image
                                src={getImagePlaceholder(currentIndex)}
                                alt="Traffic Sign"
                                className="object-cover rounded-lg shadow-2xl"
                                width={400}
                                height={300}
                            />
                    </div>
                </div>
            )}
        </div>
    );
}