
import QuestionCard from "../components/QuestionCard";
import G1Result from "../components/G1Result";

type Question = {
  image: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export default function Home() {
  const handleReview = (incorrectQuestions: Question[]) => console.log("Incorrect questions:", incorrectQuestions);
  return (
    <div className="relative min-h-screen w-full">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/images/g1-background.jpg')" }}
      ></div>

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-7xl mx-auto z-10 flex items-center justify-center min-h-screen px-4">        
        <QuestionCard onReview={handleReview} />
      </div>
    </div>
  );
}
