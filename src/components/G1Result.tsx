"use client";
import React, { useState } from 'react';
import { CheckCircle, Eye, XCircle } from 'lucide-react';
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
  onReview: (incorrectQuestions: Question[]) => void;
}

export default function G1Result(props: G1ResultProps): JSX.Element {
  const { score, questions, passed, onReset, onReview} = props;

    const handleReview = (incorrectQuestions: Question[]) => {
    }

    const isCorrect = (index: number) => {
      return true
    }



    const goToNextTest = () => {
        window.location.href = '/g2-test';
    };
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center min-h-[60vh] px-4"
        >            
            <div className="bg-white rounded-2xl shadow-xl border p-8 w-full max-w-md text-center space-y-6">
              {passed ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                >
                  <CheckCircle className="w-14 h-14 mx-auto text-green-600" />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                >
                  <XCircle className="w-14 h-14 mx-auto text-red-600" />
                </motion.div>
              )}

              <h2 className="text-2xl font-bold">Exam Complete 🎉</h2>

              <motion.p
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg">
                You scored <span className="font-semibold">{score}</span> out of {questions.length}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className={`text-xl font-semibold ${passed ? 'text-green-600' : 'text-red-600'}`}>
                {passed ? '✅ You passed the exam!' : '❌ You failed. Try again!'}
              </motion.p>

              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 justify-center mt-4">
                <button
                  onClick={() => onReview(questions)}
                  className="px-5 py-2.5 rounded-xl transition bg-gray-200 hover:bg-gray-300 text-gray-800 flex items-center justify-center w-full sm:w-auto"
                >
                  <Eye className="w-4 h-4 mr-2" />Review</button>
                <button onClick={passed ? goToNextTest : onReset} className={`px-5 py-2.5 rounded-xl transition ${passed ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-red-600 text-white hover:bg-red-700'} w-full sm:w-auto`}>
                  {passed ? 'Next Test' : 'Try Again'}
                </button>
              </div>
            </div>
        </motion.div>
    );
}
