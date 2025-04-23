import FilterButton from "@/components/FilterButton";
import TestCard from "@/components/TestCard";
import Link from "next/link";



export default function Page() {
    const tests = [
        {
            image: "https://cdn.usegalileo.ai/sdxl10/f881b0e9-7162-4620-a176-53f750b3ad4b.png",
            title: "TOEFL",
            description: "Test of English as a Foreign Language"
        },
        {
            image: "https://cdn.usegalileo.ai/sdxl10/33a36334-adc1-442b-9100-01a9ae8de147.png",
            title: "GRE",
            description: "Graduate Record Examinations"
        },
        {
            image: "https://cdn.usegalileo.ai/sdxl10/8af1e0bf-3802-4a55-9144-5b52a209d6a8.png",
            title: "GMAT",
            description: "Graduate Management Admission Test"
        },
        {
            image: "https://cdn.usegalileo.ai/sdxl10/d5e2f2ae-ff9f-42e4-9e3a-68e45da022bf.png",
            title: "IELTS",
            description: "International English Language Testing System"
        },
        {
            image: "https://cdn.usegalileo.ai/sdxl10/048ced88-3ddd-4405-a13b-9a22ba4b014c.png",
            title: "LSAT",
            description: "Law School Admission Test"
        },
        {
            image: "https://cdn.usegalileo.ai/sdxl10/a9a9124d-299e-4135-b51f-f03b3ed6720b.png",
            title: "MCAT",
            description: "Medical College Admission Test"
        },
        {
            image: "https://cdn.usegalileo.ai/sdxl10/91b5374b-82c5-449e-a64e-e6fed6ef09c2.png",
            title: "SAT",
            description: "Scholastic Assessment Test"
        },
        {
            image: "https://cdn.usegalileo.ai/sdxl10/4fc69f1e-266b-4e89-a0b2-60d2f31a200d.png",
            title: "ACT",
            description: "American College Testing"
        },
        {
            image: "https://cdn.usegalileo.ai/sdxl10/9a370a48-b609-4409-a29c-65899cb95e9b.png",
            title: "AP Exams",
            description: "Advanced Placement Exams"
        },
        {
            image: "https://cdn.usegalileo.ai/sdxl10/d101a759-a011-4f10-9826-2a34fff81437.png",
            title: "PSAT/NMSQT",
            description: "Preliminary SAT/National Merit Scholarship Qualifying Test"
        },
        {
            image: "https://cdn.usegalileo.ai/sdxl10/7897d0fd-000c-4562-a3ac-ccdad2705103.png",
            title: "GED",
            description: "General Educational Development"
        },
        {
            image: "https://cdn.usegalileo.ai/sdxl10/c707dfb7-0e56-4c17-a852-632a4e7d5eb8.png",
            title: "NCLEX",
            description: "National Council Licensure Examination"
        }
    ];

    const filters = ["All", "TOEFL", "GRE", "GMAT", "IELTS", "LSAT"];

    return (
        <div className="layout-container flex h-full grow flex-col">
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf3] px-10 py-3">
                <Link href="/" className="flex items-center gap-4 text-[#0e141b]">
                 <div className="flex items-center gap-8">
                    <div className="flex items-center gap-4 text-[#0e141b]">
                        <div className="size-4">
                            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
                            </svg>
                        </div>
                        <h2 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em]">TrueNorthTests</h2>
                    </div>
                    
                </div>
                </Link>
               
                <div className="flex flex-1 justify-end gap-8">
                    <label className="flex flex-col min-w-40 !h-10 max-w-64">
                        <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                            <div
                                className="text-[#4e7397] flex border-none bg-[#e7edf3] items-center justify-center pl-4 rounded-l-xl border-r-0"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                    <path
                                        d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                                    ></path>
                                </svg>
                            </div>
                            <input
                                placeholder="Search"
                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e141b] focus:outline-0 focus:ring-0 border-none bg-[#e7edf3] focus:border-none h-full placeholder:text-[#4e7397] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                            />
                        </div>
                    </label>
                    <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                        style={{ backgroundImage: "url('https://cdn.usegalileo.ai/sdxl10/51e0d76a-7710-424b-bcef-1f7deb63a2db.png')" }}
                    ></div>
                </div>
            </header>
            <div className="px-40 flex flex-1 justify-center py-5">
                <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                    <div className="flex flex-wrap justify-between gap-3 p-4">
                        <p className="text-[#0e141b] tracking-light text-[32px] font-bold leading-tight min-w-72">Select your test</p>
                    </div>

                    <div className="px-4 py-3">
                        <label className="flex flex-col min-w-40 h-12 w-full">
                            <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                                <div
                                    className="text-[#4e7397] flex border-none bg-[#e7edf3] items-center justify-center pl-4 rounded-l-xl border-r-0"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                        <path
                                            d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                                        ></path>
                                    </svg>
                                </div>
                                <input
                                    placeholder="Search for a test"
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0e141b] focus:outline-0 focus:ring-0 border-none bg-[#e7edf3] focus:border-none h-full placeholder:text-[#4e7397] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                                />
                            </div>
                        </label>
                    </div>

                    <div className="flex gap-3 p-3 flex-wrap pr-4">
                        {filters.map((filter, index) => (
                            <FilterButton key={index} label={filter} />
                        ))}
                    </div>

                    <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Tests</h2>

                    <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                        {tests.map((test, index) => (
                            <TestCard
                                key={index}
                                image={test.image}
                                title={test.title}
                                description={test.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}