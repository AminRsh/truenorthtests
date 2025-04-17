"use client"

import { useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import G1Result from "./G1Result";

type Question = {
    image: string;
    options: string[];
    correctIndex: number;
    explanation: string;
};


const questions: Question[] = [
    {
        image: "/assets/images/1.png",
        options: ["Stop sign", "Stop if road is crowded", "Stop sign ahead", "None of the above"],
        correctIndex: 2,
        explanation: "This sign is known as Stop sign ahead which is a warning sign that reminds you to stop your vehicle."
    },
    {
        image: "/assets/images/2.png",
        options: ["Wiggly road", "Winding road", "Sharp road", "Bending road"],
        correctIndex: 1,
        explanation: "Winding road sign warns the drivers to slow their vehicles as there are many curves on the road. Moreover, Winding Road refers to the frequent turns on the path in various directions."
    },
    {
        image: "/assets/images/3.png",
        options: ["No passing allowed", "braking is not allowed","No more than 2 cars on road","None of these"],
        correctIndex: 0,
        explanation: "It's not safe to pass the vehicle on the road as the road is not broad enough, there may be curvy roads ahead or lack of visibility."
    },
    {
        image: "/assets/images/4.png",
        options: ["There is barrier in front", "Keep right, road splits in two", "Keep left, road splits in two", "Stop at barrier"],
        correctIndex: 1,
        explanation: "Stay at the right side of traffic island."
    },
    {
        image: "/assets/images/5.png",
        options: ["Intersection ahead", "Plus-road ahead", "Left for right turn before straight turn", "None of the above"],
        correctIndex: 0,
        explanation: "This is an intersection road ahead sign which warns the drivers to slow down their vehicle as two or more lanes are connecting ahead."
    },
    {
        image: "/assets/images/6.png",
        options: ["Narrow bridge ahead", "Road's merging", "Pavement narrows ahead", "None of the above"],
        correctIndex: 2,
        explanation: "This sign represents that the ahead road is not broad."
    },
    {
        image: "/assets/images/7.png",
        options: ["Left turn prohibited", "No U-turn", "No reversing", "Both A and B"],
        correctIndex: 1,
        explanation: "This sign means taking turn in the opposite direction is prohibited."
    },
    {
        image: "/assets/images/8.png",
        options: ["Pedestrian cross-over", "Senior citizen crossing", "School zone", "Playground area ahead"],
        correctIndex: 2,
        explanation: "This is a School Zone ahead sign which warns you to slow down your vehicle during the school timings."
    },
    {
        image: "/assets/images/9.png",
        options: ["Snowing ahead", "Drive carefully in summers", "Pavement slippery when wet", "None of these"],
        correctIndex: 2,
        explanation: "This is a warning sign which explains that driver have to proceed carefully as the road is slippery when wet and the reason for this maybe snow, rain or dew."
    },
    {
        image: "/assets/images/10.png",
        options: ["Traffic sign ahead", "Intersection ahead", "Stop at traffic intersection", "No need to stop at intersection"],
        correctIndex: 0,
        explanation: "This sign represents that there is a traffic sign ahead and drivers have to slow down their vehicle or come to a complete stop when the lights turn red."
    },
    {
        image: "/assets/images/11.png",
        options: ["Do not stop between in the area between two of these signs", "No stopping", "Do not enter", "Stop for inspection"],
        correctIndex: 0,
        explanation: "This sign means that parking in a specific area which is in between the signs and parking the vehicle at any point of time is prohibited as it's not safe for the drivers to park their vehicle at such warning spots."
    },
    {
        image: "/assets/images/12.png",
        options: ["No right turn at intersection", "No left turn at intersection", "Do not turn at intersection", "No stopping on left side"],
        correctIndex: 1,
        explanation: "At intersection its prohibited to take left turn."
    },
    {
        image: "/assets/images/13.png",
        options: ["Stop sign ahead", "Yield sign", "Give way sign", "Stop sign"],
        correctIndex: 3,
        explanation: "It's a regulatory sign which means this sign gives you some kind of direction and its mandatory to obey it. Thus, whenever you see this sign, you have to come to a full stop."
    },
    {
        image: "/assets/images/14.png",
        options: ["Give way sign", "Yield sign", "Stop sign", "Both A and B"],
        correctIndex: 3,
        explanation: "This is a yield sign which is an upside-down triangle. It ensures that you have to wait until the traffic at intersection gets clear along with this if it's necessary than stop your vehicle."
    },
    {
        image: "/assets/images/15.png",
        options: ["Keep right on multilane road, slower traffic", "Keep left on multilane road, slower traffic", "Keep your vehicle on right and let slower traffic pass from left", "None of these"],
        correctIndex: 0,
        explanation: "On multi-lane road drivers must keep their vehicle on right lane as the traffic is slow there."
    },
    {
        image: "/assets/images/16.png",
        options: ["Two way left turn lane only", "One way left turn lane only", "Both A and B", "None of these"],
        correctIndex: 0,
        explanation: "This is a dual left turn sign which means that in any of the direction there is only left turn."
    },
    {
        image: "/assets/images/17.png",
        options: ["Do not turn left at red light", "Do not turn right at red light", "Do not go straight at red light", "None of these"],
        correctIndex: 1,
        explanation: "This sign represents that drivers must not turn right when the traffic light is red at the intersection."
    },
    {
        image: "/assets/images/18.png",
        options: ["Truck may enter from left side", "Truck bridge entrance from right side", "Fire truck entrance", "None of the above"],
        correctIndex: 1,
        explanation: "This sign shows that the trucks are allowed to enter from the right side of the lane."
    },
    {
        image: "/assets/images/19.png",
        options: ["Wild animals cross at this road", "Deer crossing area", "Both A and B", "None of the above"],
        correctIndex: 2,
        explanation: "This sign indicates warning regarding the regular crossing of lanes by deer."
    },
    {
        image: "/assets/images/20.png",
        options: ["Survey ahead", "Road work temporary sign", "Cement ahead", "Road closed ahead"],
        correctIndex: 1,
        explanation: "It indicates that some work is going on road for short duration."
    }
];

export default function QuestionCard() {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [showResult, setShowResult] = useState<boolean>(false);
    const [score, setScore] = useState<number>(0);
    const [answeredQuestions, setAnsweredQuestions] = useState<number>(0);
    const questionRef = useRef<HTMLDivElement>(null);

    const question = questions[currentIndex];

    const handleOptionClick = (index:number) => {
        if (!isSubmitted) setSelectedOption(index);
    };

    const handleSubmit = () => {
        if (selectedOption === null) return;

        setIsSubmitted(true);
        setAnsweredQuestions(prev => prev + 1);

        const isCorrect = selectedOption === question.correctIndex;
        if (isCorrect) {
            setScore(prev => prev + 1);
            setTimeout(() => {
                if (currentIndex < questions.length - 1) {
                    handleNext();
                } else {
                    setShowResult(true);
                }
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

                        // Animate back in
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
            {/* Progress tracker */}
            {
                !showResult && (
                    <div className="absolute top-4 right-4 bg-blue-100 p-2 rounded-lg shadow-2xl text-blue-800 text-sm z-10 ">
                        Question: {currentIndex + 1}/20
                        <div className="text-sm">Correct: {score}/{answeredQuestions}</div>
                    </div>
                )
            }

            {showResult ? (
                // <div className="text-center space-y-4 p-8">
                //     <h2 className="text-2xl font-bold">Exam Complete 🎉</h2>
                //     <p className="text-lg">You scored {score} out of {questions.length}</p>
                //     <p className={`text-xl font-semibold ${passed ? 'text-green-600' : 'text-red-600'}`}>
                //         {passed ? "✅ You passed the exam!" : "❌ You failed. Try again!"}
                //     </p>
                //     <button
                //         onClick={() => {
                //             setCurrentIndex(0);
                //             setScore(0);
                //             setAnsweredQuestions(0);
                //             setSelectedOption(null);
                //             setIsSubmitted(false);
                //             setShowResult(false);
                //         }}
                //         className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
                //     >
                //         Try Again
                //     </button>
                // </div>
                <G1Result
                    score={score}    
                    questions={questions}                    
                    passed={passed}
                    onReset={handleReset}
                />
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
                                    <p className="text-green-600 font-semibold">Correct Answer!</p>
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

                    {/* Image */}
                    <div className="md:w-[400px] flex items-center justify-center ">
                        <div className="relative w-[400px] h-[300px] overflow-hidden">
                            <Image
                                src={getImagePlaceholder(currentIndex)}
                                alt="Traffic Sign"
                                className="object-contain rounded-lg"
                                fill
                                sizes="400px"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}