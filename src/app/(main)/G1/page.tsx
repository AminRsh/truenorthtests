
import Link from "next/link";

export default function Page() {
    const testCount = 8;

    return (
        <div className="relative min-h-screen w-full">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/assets/images/g1-background.jpg')" }}
            ></div>

            <div className="absolute inset-0 bg-black/50"></div>
            <main className="relative flex flex-col justify-center items-center px-8 py-24 ">
                <h1 className="text-3xl font-bold mb-6 text-white">G1 Practice Tests</h1>
                <ul className="space-y-4">
                    {[...Array(testCount)].map((_, index) => (
                        <li key={index}>
                            <Link
                                href={`/G1/${index + 1}`}
                                className="text-gray-100 hover:text-yellow-300 transition-colors duration-75 ease-in-out"
                            >
                                Start Test #{index + 1}
                            </Link>
                        </li>
                    ))}
                </ul>
            </main>
        </div>

    );
}
