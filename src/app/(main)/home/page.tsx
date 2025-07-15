import { validateRequest } from '@/auth';
import PremiumButton from '@/components/ui/PremiumButton';
import UserButton from '@/components/UserButton';
import Link from 'next/link';
import Image from 'next/image'; // Added Image import
import { Metadata } from 'next';

// Enhanced SEO metadata
export const metadata: Metadata = {
  title: 'TrueNorthTests - Master Your G1, ACT, GRE & GMAT Tests | Free Practice Tests',
  description: 'Ace your G1 driving test, ACT, GRE, and GMAT with our comprehensive study resources. Join thousands of successful students with our proven practice tests and study materials.',
  keywords: 'G1 test, driving test Ontario, ACT prep, GRE practice, GMAT study, online test preparation, practice tests, study materials',
  openGraph: {
    title: 'TrueNorthTests - Master Your Tests with Confidence',
    description: 'Comprehensive study resources for G1, ACT, GRE, and GMAT tests. Join thousands of satisfied students!',
    url: 'https://truenorthtests.com',
    siteName: 'TrueNorthTests',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TrueNorthTests - Online Test Preparation Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TrueNorthTests - Master Your Tests',
    description: 'Ace your G1, ACT, GRE & GMAT tests with our proven study resources',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://truenorthtests.com',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default async function Home() {
  const { user } = await validateRequest();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'TrueNorthTests',
    description: 'Online test preparation platform for G1, ACT, GRE, and GMAT tests',
    url: 'https://truenorthtests.com',
    logo: 'https://truenorthtests.com/logo.png',
    sameAs: [
      'https://facebook.com/truenorthtests',
      'https://twitter.com/truenorthtests',
      'https://instagram.com/truenorthtests',
    ],
    offers: {
      '@type': 'Offer',
      category: 'Education',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '1247',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="relative flex size-full min-h-screen flex-col bg-gradient-to-br from-slate-50 to-blue-50/30 group/design-root overflow-x-hidden" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
        <div className="layout-container flex h-full grow flex-col">
          {/* Enhanced Header with better accessibility */}
          <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf3] backdrop-blur-lg bg-white/80 px-6 md:px-14 py-4 shadow-sm">
            <div className="flex items-center gap-4 text-[#0e141b]">
              <div className="size-8 transition-transform hover:scale-105">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
                </svg>
              </div>
              <h1 className="text-[#0e141b] text-xl font-bold leading-tight tracking-[-0.015em]">TrueNorthTests</h1>
            </div>
            <nav className="hidden md:flex flex-1 justify-center">
              <div className="flex items-center gap-8">
                <Link className="text-[#0e141b] text-sm font-medium leading-normal hover:text-[#1980e6] transition-colors relative group" href="/categories">
                  Tests
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1980e6] transition-all group-hover:w-full"></span>
                </Link>
                <Link className="text-[#0e141b] text-sm font-medium leading-normal hover:text-[#1980e6] transition-colors relative group" href="/about">
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1980e6] transition-all group-hover:w-full"></span>
                </Link>
                <Link className="text-[#0e141b] text-sm font-medium leading-normal hover:text-[#1980e6] transition-colors relative group" href="/dashboard">
                  Your Dashboard
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1980e6] transition-all group-hover:w-full"></span>
                </Link>
                <PremiumButton />
              </div>
            </nav>
            <div className="flex items-center gap-4">
              {user ? (
                <UserButton />
              ) : (
                <div className="flex gap-2">
                  <Link href="/signup"
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1980e6] hover:bg-[#1570d1] text-slate-50 text-sm font-bold leading-normal tracking-[0.015em] transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105">
                    <span className="truncate">Sign Up</span>
                  </Link>
                  <Link href="/login"
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#e7edf3] hover:bg-[#d1d9e0] text-[#0e141b] text-sm font-bold leading-normal tracking-[0.015em] transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105">
                    <span className="truncate">Log In</span>
                  </Link>
                </div>
              )}
            </div>
          </header>

          <main className="flex-1">
            {/* Hero Section with Video Background */}
            <section className="relative overflow-hidden">
              <div className="absolute inset-0 z-0">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  poster="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                >
                  <source src="https://player.vimeo.com/external/371433846.sd.mp4?s=236234c6c98e5b8d6c5a1e6f1c2e3d4f5g6h7i8j&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/60 to-purple-900/70"></div>
              </div>

              <div className="relative z-10 px-6 md:px-40 py-20 md:py-32">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em] mb-6 animate-fade-in">
                    Master Your Tests with
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"> Confidence</span>
                  </h2>
                  <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed mb-8 max-w-2xl mx-auto">
                    Join over 10,000 successful students who aced their G1, ACT, GRE, and GMAT tests with our comprehensive, AI-powered study platform.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link href="/signup" className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-8 bg-gradient-to-r from-[#1980e6] to-[#1570d1] hover:from-[#1570d1] hover:to-[#1260c1] text-white text-base font-bold leading-normal tracking-[0.015em] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                      <span className="truncate">Start Free Trial</span>
                    </Link>
                    <Link href="/demo" className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-8 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white text-base font-bold leading-normal tracking-[0.015em] transition-all duration-300 border border-white/30 hover:border-white/50">
                      <span className="truncate">Watch Demo</span>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white">
              <div className="max-w-6xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div className="space-y-2">
                    <div className="text-3xl md:text-4xl font-black text-[#1980e6]">10,000+</div>
                    <div className="text-sm md:text-base text-gray-600">Students Helped</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl md:text-4xl font-black text-[#1980e6]">95%</div>
                    <div className="text-sm md:text-base text-gray-600">Success Rate</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl md:text-4xl font-black text-[#1980e6]">1,000+</div>
                    <div className="text-sm md:text-base text-gray-600">Practice Questions</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl md:text-4xl font-black text-[#1980e6]">24/7</div>
                    <div className="text-sm md:text-base text-gray-600">Support Available</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Enhanced Tests Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
              <div className="max-w-6xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                  <h2 className="text-[#0e141b] text-3xl md:text-4xl font-black leading-tight tracking-[-0.015em] mb-4">
                    Tests We Support
                  </h2>
                  <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Comprehensive preparation materials for the most important tests in your academic and professional journey.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <Link href="/G1" className="group">
                    <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 h-full">
                      <div className="relative">
                        <Image
                          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                          alt="Ontario G1 Driving Test Preparation"
                          width={2069}
                          height={1379}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-[#0e141b] text-xl font-bold leading-normal mb-2">Ontario G1 Driving Test</h3>
                        <p className="text-[#4e7397] text-sm font-normal leading-relaxed mb-4">
                          Master the G1 written test with our comprehensive question bank and road sign recognition practice.
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-[#1980e6] font-semibold">Free Practice</span>
                          <div className="flex items-center text-yellow-500">
                            <span className="text-sm">4.9</span>
                            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>

                  <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 h-full group">
                    <div className="relative">
                      <Image
                        src="https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                        alt="ACT Test Preparation"
                        width={2070}
                        height={1380}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-[#0e141b] text-xl font-bold leading-normal mb-2">ACT Test Prep</h3>
                      <p className="text-[#4e7397] text-sm font-normal leading-relaxed mb-4">
                        Achieve your target ACT score with our adaptive practice tests and personalized study plans.
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-[#1980e6] font-semibold">Premium</span>
                        <div className="flex items-center text-yellow-500">
                          <span className="text-sm">4.8</span>
                          <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </article>

                  <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 h-full group">
                    <div className="relative">
                      <Image
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                        alt="GRE Test Preparation"
                        width={2070}
                        height={1380}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-[#0e141b] text-xl font-bold leading-normal mb-2">GRE Test Prep</h3>
                      <p className="text-[#4e7397] text-sm font-normal leading-relaxed mb-4">
                        Master the GRE with our expert-designed verbal, quantitative, and analytical writing practice.
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-[#1980e6] font-semibold">Premium</span>
                        <div className="flex items-center text-yellow-500">
                          <span className="text-sm">4.7</span>
                          <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81 .588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </article>

                  <article className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 h-full group">
                    <div className="relative">
                      <Image
                        src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80"
                        alt="GMAT Test Preparation"
                        width={2026}
                        height={1351}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-[#0e141b] text-xl font-bold leading-normal mb-2">GMAT Test Prep</h3>
                      <p className="text-[#4e7397] text-sm font-normal leading-relaxed mb-4">
                        Excel in the GMAT with our comprehensive quantitative, verbal, and integrated reasoning modules.
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-[#1980e6] font-semibold">Premium</span>
                        <div className="flex items-center text-yellow-500">
                          <span className="text-sm">4.8</span>
                          <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81 .588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
              <div className="max-w-6xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                  <h2 className="text-[#0e141b] text-3xl md:text-4xl font-black leading-tight tracking-[-0.015em] mb-4">
                    Why Choose TrueNorthTests?
                  </h2>
                  <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Our platform combines cutting-edge technology with proven educational methods to ensure your success.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div className="text-center group">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#1980e6] to-[#1570d1] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-[#0e141b] mb-4">Proven Results</h3>
                    <p className="text-gray-600">95% of our students pass their tests on the first attempt with our comprehensive preparation methods.</p>
                  </div>

                  <div className="text-center group">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#1980e6] to-[#1570d1] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-[#0e141b] mb-4">Expert Support</h3>
                    <p className="text-gray-600">Get personalized guidance from certified instructors and subject matter experts whenever you need help.</p>
                  </div>

                  <div className="text-center group">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#1980e6] to-[#1570d1] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-[#0e141b] mb-4">Adaptive Learning</h3>
                    <p className="text-gray-600">Our AI-powered system adapts to your learning style and focuses on areas where you need the most improvement.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Enhanced Testimonials */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
              <div className="max-w-6xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                  <h2 className="text-[#0e141b] text-3xl md:text-4xl font-black leading-tight tracking-[-0.015em] mb-4">
                    Success Stories from Our Students
                  </h2>
                  <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Join thousands of students who achieved their goals with TrueNorthTests.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <Image
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDMzfHx8ZW58MHx8fHx8&ixlib=rb-4.0.3&q=60&w=3000"
                        alt="Samantha Thompson"
                        width={48}
                        height={48}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-bold text-[#0e141b]">Samantha Thompson</h4>
                        <p className="text-sm text-gray-500">G1 Test Success</p>
                      </div>
                    </div>
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-700 italic">
                      &quot;TrueNorthTests made my G1 test preparation so much easier! The practice questions were exactly like the real test, and I passed on my first try with a perfect score.&quot;
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <Image
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
                        alt="Michael Chen"
                        width={48}
                        height={48}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-bold text-[#0e141b]">Michael Chen</h4>
                        <p className="text-sm text-gray-500">ACT Score: 34</p>
                      </div>
                    </div>
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81 .588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-700 italic">
                      &quot;I improved my ACT score by 8 points using TrueNorthTests! The adaptive learning system identified my weak areas and helped me focus on what mattered most.&quot;
                    </p>
                  </div>

                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <Image
                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
                        alt="Sarah Johnson"
                        width={48}
                        height={48}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-bold text-[#0e141b]">Sarah Johnson</h4>
                        <p className="text-sm text-gray-500">GRE Score: 325</p>
                      </div>
                    </div>
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784 .57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81 .588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-700 italic">
                      &quot;The GRE prep course was incredible! The detailed explanations and practice tests helped me achieve my target score and get into my dream graduate program.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* How It Works Section */}
            <section className="py-20 bg-white">
              <div className="max-w-6xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                  <h2 className="text-[#0e141b] text-3xl md:text-4xl font-black leading-tight tracking-[-0.015em] mb-4">
                    How It Works
                  </h2>
                  <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Get started in minutes and begin your journey to test success with our simple 4-step process.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="text-center relative">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#1980e6] to-[#1570d1] rounded-full flex items-center justify-center text-white text-xl font-bold">
                      1
                    </div>
                    <h3 className="text-lg font-bold text-[#0e141b] mb-3">Choose Your Test</h3>
                    <p className="text-gray-600 text-sm">Select the test you want to prepare for from our comprehensive list of supported exams.</p>
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -translate-x-1/2" style={{ zIndex: -1 }}></div>
                  </div>

                  <div className="text-center relative">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#1980e6] to-[#1570d1] rounded-full flex items-center justify-center text-white text-xl font-bold">
                      2
                    </div>
                    <h3 className="text-lg font-bold text-[#0e141b] mb-3">Take Assessment</h3>
                    <p className="text-gray-600 text-sm">Complete an initial assessment to identify your strengths and areas for improvement.</p>
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -translate-x-1/2" style={{ zIndex: -1 }}></div>
                  </div>

                  <div className="text-center relative">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#1980e6] to-[#1570d1] rounded-full flex items-center justify-center text-white text-xl font-bold">
                      3
                    </div>
                    <h3 className="text-lg font-bold text-[#0e141b] mb-3">Study & Practice</h3>
                    <p className="text-gray-600 text-sm">Follow your personalized study plan with practice questions, video lessons, and expert tips.</p>
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -translate-x-1/2" style={{ zIndex: -1 }}></div>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#1980e6] to-[#1570d1] rounded-full flex items-center justify-center text-white text-xl font-bold">
                      4
                    </div>
                    <h3 className="text-lg font-bold text-[#0e141b] mb-3">Pass Your Test</h3>
                    <p className="text-gray-600 text-sm">Take your test with confidence and achieve the score you need to reach your goals.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
              <div className="max-w-4xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                  <h2 className="text-[#0e141b] text-3xl md:text-4xl font-black leading-tight tracking-[-0.015em] mb-4">
                    Frequently Asked Questions
                  </h2>
                </div>

                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <h3 className="font-bold text-[#0e141b] mb-3">Is TrueNorthTests free to use?</h3>
                    <p className="text-gray-600">We offer free access to our G1 test preparation materials. Premium features for ACT, GRE, and GMAT are available with our subscription plans.</p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <h3 className="font-bold text-[#0e141b] mb-3">How accurate are your practice tests?</h3>
                    <p className="text-gray-600">Our practice tests are designed by certified experts and closely mirror the format, difficulty, and content of actual exams. 95% of our users report that our tests accurately prepared them for their real exams.</p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <h3 className="font-bold text-[#0e141b] mb-3">Can I access the materials on mobile devices?</h3>
                    <p className="text-gray-600">Yes! TrueNorthTests is fully responsive and works perfectly on smartphones, tablets, and desktop computers. Study anywhere, anytime.</p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-md">
                    <h3 className="font-bold text-[#0e141b] mb-3">Do you offer money-back guarantees?</h3>
                    <p className="text-gray-600">We offer a 30-day money-back guarantee on all premium subscriptions. If you&#39;re not satisfied with your experience, we&#39;ll provide a full refund.</p>
                  </div>
                </div>
              </div>
            </section>


            <section className="py-20 bg-[#1980e6]">


              <div className="relative z-20 max-w-4xl mx-auto px-6 md:px-12 text-center">
                <h2 className="text-white text-3xl md:text-5xl font-black leading-tight tracking-[-0.033em] mb-6">
                  Ready to Ace Your Test?
                </h2>
                <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed mb-8 max-w-2xl mx-auto">
                  Join thousands of successful students who trusted TrueNorthTests to achieve their goals. Start your free trial today!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    href="/signup"
                    className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-8 bg-white hover:bg-gray-100 text-[#1980e6] text-base font-bold leading-normal tracking-[0.015em] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
                  >
                    <span className="truncate">Start Free Trial</span>
                  </Link>
                  <Link
                    href="/pricing"
                    className="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-8 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white text-base font-bold leading-normal tracking-[0.015em] transition-all duration-300 border border-white/30 hover:border-white/50"
                  >
                    <span className="truncate">View Pricing</span>
                  </Link>
                </div>

                {/* Feature List */}
                <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/80 text-sm">
                  {['Free Trial', 'No Credit Card Required', 'Cancel Anytime'].map((text, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 10-1.414 1.414L9 13.414l4.707-4.707z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </main>

          {/* Enhanced Footer */}
          <footer className="bg-gray-900 text-white py-16">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="size-8">
                      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
                      </svg>
                    </div>
                    <span className="text-xl font-bold">TrueNorthTests</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Empowering students worldwide to achieve their test goals with comprehensive, expert-designed preparation materials.
                  </p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold mb-4">Tests</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li><Link href="/G1" className="hover:text-white transition-colors">G1 Driving Test</Link></li>
                    <li><Link href="/act" className="hover:text-white transition-colors">ACT Prep</Link></li>
                    <li><Link href="/gre" className="hover:text-white transition-colors">GRE Prep</Link></li>
                    <li><Link href="/gmat" className="hover:text-white transition-colors">GMAT Prep</Link></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold mb-4">Company</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                    <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                    <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                    <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold mb-4">Support</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                    <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                    <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                    <li><Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link></li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm">
                  © 2024 TrueNorthTests. All rights reserved.
                </p>
                <div className="flex items-center gap-4 mt-4 md:mt-0">
                  <span className="text-gray-400 text-sm">Made with ❤️ for students worldwide</span>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}