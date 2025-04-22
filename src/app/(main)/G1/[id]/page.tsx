
import { getTestData } from "@/lib/getTestData";
import { notFound } from "next/navigation";
import { Question } from "@/lib/types";
import QuestionCard from "@/components/QuestionCard";

interface PageProps {
    params: { id: string };
}

export default async function TestPage({ params }: PageProps) {
    const { id } = await params;
    const questions: Question[] | null = await getTestData(id);
    if (!questions) return notFound();

    return (
        <div className="relative min-h-screen w-full">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/assets/images/g1-test.jpg')" }}
            ></div>

            <div className="absolute inset-0 bg-black/50"></div>
            <main className="p-8">
                <h1 className="text-2xl font-semibold mb-6 text-white">Test #{id}</h1>
                <QuestionCard questions={questions} />
            </main>
        </div>

    );
}
