
import Link from 'next/link';

export default function Sidebar() {
    return (
        <div className="layout-content-container flex flex-col w-80">
            <div className="flex h-full min-h-[700px] flex-col justify-between bg-slate-50 p-4">
                <div className="flex flex-col gap-4">
                    <div className="flex gap-3">
                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                            style={{ backgroundImage: "url('https://cdn.usegalileo.ai/sdxl10/7867c71d-8f0b-46f3-9727-bc546c373b51.png')" }}></div>
                        <h1 className="text-[#0e141b] text-base font-medium leading-normal">TestPrep</h1>
                    </div>

                    <div className="flex flex-col gap-2">
                        <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-xl bg-[#e7edf3]">
                            <div className="text-[#0e141b]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                    <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM68,96A12,12,0,1,1,80,84,12,12,0,0,1,68,96Zm40,0a12,12,0,1,1,12-12A12,12,0,0,1,108,96Z"></path>
                                </svg>
                            </div>
                            <p className="text-[#0e141b] text-sm font-medium leading-normal">Dashboard</p>
                        </Link>

                        <Link href="/preparation" className="flex items-center gap-3 px-3 py-2">
                            <div className="text-[#0e141b]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                    <path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"></path>
                                </svg>
                            </div>
                            <p className="text-[#0e141b] text-sm font-medium leading-normal">Preparation</p>
                        </Link>

                        <Link href="/account" className="flex items-center gap-3 px-3 py-2">
                            <div className="text-[#0e141b]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                                    <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
                                </svg>
                            </div>
                            <p className="text-[#0e141b] text-sm font-medium leading-normal">Account</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}