
import { validateRequest } from '@/auth';
import UserButton from '@/components/UserButton';
import Link from 'next/link';

export default async function Home() {

  const { user } = await validateRequest();
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-slate-50 group/design-root overflow-x-hidden" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf3] px-10 py-3">
          <div className="flex items-center gap-4 text-[#0e141b]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path></svg>
            </div>
            <h2 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em]">TrueNorthTests</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <Link className="text-[#0e141b] text-sm font-medium leading-normal" href="/categories">Tests</Link>
              <Link className="text-[#0e141b] text-sm font-medium leading-normal" href="#">About</Link>
              <Link className="text-[#0e141b] text-sm font-medium leading-normal" href="/dashboard">Your Dashboard</Link>
            </div>
            {
              user ? (<UserButton />) : (
              <div className="flex gap-2">
                <Link href="/signup"
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1980e6] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Sign Up</span>
                </Link>
                <Link href="/login"
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#e7edf3] text-[#0e141b] text-sm font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Log In</span>
                </Link>
              </div>)
            }
          </div>
        </header>
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
                  style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://cdn.usegalileo.ai/sdxl10/d2eb94f9-51c7-431d-ab02-6b01f17f9904.png")' }}
                >
                  <div className="flex flex-col gap-2 text-center">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                      Ace Your Exams with TrueNorthTests
                    </h1>
                    <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      Comprehensive study resources to boost your confidence and ensure success on your important tests. Join thousands of satisfied students!
                    </h2>
                  </div>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1980e6] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                    <span className="truncate">Get Started</span>
                  </button>
                </div>
              </div>
            </div>
            <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Tests We Support</h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <Link href="/G1" >
                <div className="flex flex-col gap-3 pb-3">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/90d5cb58-ff1c-40e9-b364-5873127f2a21.png")' }}
                  ></div>
                  <div>
                    <p className="text-[#0e141b] text-base font-medium leading-normal">ON G1 driving test</p>
                    <p className="text-[#4e7397] text-sm font-normal leading-normal">Prepare effectively for the G1 test with our comprehensive resources.</p>
                  </div>
                </div>
              </Link>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/65eeb5e5-1d2b-47ef-876c-b5d0e6f9258c.png")' }}
                ></div>
                <div>
                  <p className="text-[#0e141b] text-base font-medium leading-normal">ACT</p>
                  <p className="text-[#4e7397] text-sm font-normal leading-normal">Achieve your best score on the ACT with targeted practice materials.</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/e8c29604-b32b-4f92-b680-be8dbddd85d6.png")' }}
                ></div>
                <div>
                  <p className="text-[#0e141b] text-base font-medium leading-normal">GRE</p>
                  <p className="text-[#4e7397] text-sm font-normal leading-normal">Master the GRE with our expert strategies and practice tests.</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                  style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/be2b5961-5aea-45ae-8d25-96d75e1f1f51.png")' }}
                ></div>
                <div>
                  <p className="text-[#0e141b] text-base font-medium leading-normal">GMAT</p>
                  <p className="text-[#4e7397] text-sm font-normal leading-normal">Excel in the GMAT with our tailored study plans and practice questions.</p>
                </div>
              </div>
            </div>
            <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Hear From Our Successful Students</h2>
            <div className="flex flex-col gap-8 overflow-x-hidden bg-slate-50 p-4">
              <div className="flex flex-col gap-3 bg-slate-50">
                <div className="flex items-center gap-3">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                    style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/450d88c1-035c-4278-ae1f-f1fcabcfa74b.png")' }}
                  ></div>
                  <div className="flex-1">
                    <p className="text-[#0e141b] text-base font-medium leading-normal">Samantha Thompson</p>
                    <p className="text-[#4e7397] text-sm font-normal leading-normal">July 15, 2024</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="text-[#1980e6]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                        ></path>
                      </svg>
                    </div>
                  ))}
                </div>
                <p className="text-[#0e141b] text-base font-normal leading-normal">
                  TrueNorthTests was instrumental in my SAT success! The practice tests were realistic, and the study materials were well-organized. I felt fully prepared on test day and
                  achieved my target score.
                </p>
              </div>
              <div className="flex flex-col gap-3 bg-slate-50">
                <div className="flex items-center gap-3">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                    style={{ backgroundImage: 'url("https://cdn.usegalileo.ai/sdxl10/4486ed27-4237-4e72-9bf4-35337a8ac762.png")' }}
                  ></div>
                  <div className="flex-1">
                    <p className="text-[#0e141b] text-base font-medium leading-normal">Michael Chen</p>
                    <p className="text-[#4e7397] text-sm font-normal leading-normal">June 22, 2024</p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="text-[#1980e6]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z"
                        ></path>
                      </svg>
                    </div>
                  ))}
                </div>
                <p className="text-[#0e141b] text-base font-normal leading-normal">
                  I used TrueNorthTests to study for the ACT, and I&apos;m thrilled with the outcome. The platform&apos;s user-friendly design and the detailed explanations of concepts were
                  invaluable. Highly recommended!
                </p>
              </div>
            </div>
            <div className="@container">
              <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
                <div className="flex flex-col gap-2 text-center">
                  <h1 className="text-[#0e141b] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px] mx-auto">
                    Ready to Start Your Journey?
                  </h1>
                </div>
                <div className="flex flex-1 justify-center">
                  <div className="flex justify-center">
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1980e6] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow">
                      <span className="truncate">Sign Up Now</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}