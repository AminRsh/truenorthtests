
export interface Question {
    image: string | null;
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
}
