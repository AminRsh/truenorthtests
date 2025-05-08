
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TermsOfService() {
    const router = useRouter();
    const [accepted, setAccepted] = useState(false);

    const handleAccept = () => {
        setAccepted(true);
        // You can add logic here to store this acceptance in cookies/localStorage
        setTimeout(() => {
            router.push('/');
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation */}
            <nav className="bg-indigo-600 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <Link href="/" className="flex-shrink-0 flex items-center">
                                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                                <span className="ml-2 text-xl font-bold text-white">TestPrep Pro</span>
                            </Link>
                            <div className="hidden md:ml-6 md:flex md:space-x-8">
                                <Link href="/" className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium">
                                    Home
                                </Link>
                                <Link href="/tests" className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium">
                                    Practice Tests
                                </Link>
                                <Link href="/guides" className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium">
                                    Study Guides
                                </Link>
                                <Link href="/pricing" className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium">
                                    Pricing
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <Link href="/login" className="text-white bg-indigo-700 hover:bg-indigo-800 px-4 py-2 rounded-md text-sm font-medium">
                                Sign In
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="bg-indigo-600 py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-white text-center">Terms of Service</h1>
                    <p className="mt-2 text-indigo-100 text-center max-w-3xl mx-auto">
                        Please read these terms carefully before using TestPrep Pro.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                    {/* Last Updated Banner */}
                    <div className="bg-indigo-50 px-6 py-4 border-b border-indigo-100 flex justify-between items-center">
                        <div className="text-indigo-700 font-medium">Last Updated: May 8, 2025</div>
                        <button className="text-indigo-600 hover:text-indigo-800 text-sm flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                            Download PDF
                        </button>
                    </div>

                    {/* Table of Contents */}
                    <div className="p-6 border-b border-gray-200">
                        <h2 className="text-lg font-medium text-gray-900 mb-4">Table of Contents</h2>
                        <div className="grid md:grid-cols-2 gap-y-2 gap-x-4">
                            <a href="#introduction" className="text-indigo-600 hover:text-indigo-800">1. Introduction</a>
                            <a href="#account" className="text-indigo-600 hover:text-indigo-800">2. Account Registration</a>
                            <a href="#subscription" className="text-indigo-600 hover:text-indigo-800">3. Subscription & Payments</a>
                            <a href="#content" className="text-indigo-600 hover:text-indigo-800">4. Content & Intellectual Property</a>
                            <a href="#conduct" className="text-indigo-600 hover:text-indigo-800">5. User Conduct</a>
                            <a href="#disclaimer" className="text-indigo-600 hover:text-indigo-800">6. Disclaimer of Warranties</a>
                            <a href="#liability" className="text-indigo-600 hover:text-indigo-800">7. Limitation of Liability</a>
                            <a href="#changes" className="text-indigo-600 hover:text-indigo-800">8. Changes to Terms</a>
                            <a href="#law" className="text-indigo-600 hover:text-indigo-800">9. Governing Law</a>
                            <a href="#contact" className="text-indigo-600 hover:text-indigo-800">10. Contact Us</a>
                        </div>
                    </div>

                    {/* Terms Content */}
                    <div className="p-6 space-y-8">
                        <section id="introduction">
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Introduction</h2>
                            <p className="text-gray-700 mb-4">
                                Welcome to TestPrep Pro. These Terms of Service (&quot;Terms&quot;) govern your access to and use of TestPrep Pro website, services, and applications (collectively, the &quot;Services&quot;). By accessing or using our Services, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the Services.
                            </p>
                            <p className="text-gray-700">
                                Our mission is to help users prepare effectively for various standardized tests, including citizenship tests, driving exams, and more. These Terms ensure that our platform remains fair, secure, and beneficial for all users.
                            </p>
                        </section>

                        <section id="account">
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Account Registration</h2>
                            <p className="text-gray-700 mb-4">
                                To access certain features of our Services, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
                            </p>
                            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 my-4">
                                <p className="text-blue-700 text-sm">
                                    You are responsible for safeguarding your password and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
                                </p>
                            </div>
                        </section>

                        <section id="subscription">
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Subscription and Payments</h2>
                            <p className="text-gray-700 mb-4">
                                Some aspects of the Services may be provided for a fee. You will be required to select a payment plan and provide payment information. You agree to pay all fees associated with your selected plan.
                            </p>
                            <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-4">
                                <li>Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current period.</li>
                                <li>You can cancel your subscription at any time through your account settings.</li>
                                <li>Refunds are issued according to our Refund Policy, available in your account dashboard.</li>
                            </ul>
                        </section>

                        <section id="content">
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Content and Intellectual Property</h2>
                            <p className="text-gray-700 mb-4">
                                Our Services allow you to access content including practice tests, study guides, and educational materials (&quot;Content&quot;). All Content, including text, graphics, user interfaces, and software, is owned by or licensed to TestPrep Pro and is protected by copyright and other intellectual property laws.
                            </p>

                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
                                <p className="text-yellow-700 text-sm">
                                    You are granted a limited, non-exclusive, non-transferable, revocable license to access and use our Services and Content strictly in accordance with these Terms. Unauthorized reproduction or distribution of our Content is strictly prohibited.
                                </p>
                            </div>
                        </section>

                        <section id="conduct">
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">5. User Conduct</h2>
                            <p className="text-gray-700 mb-4">
                                To maintain a positive environment for all users, you agree not to:
                            </p>
                            <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-4">
                                <li>Use the Services in any way that could disable, overburden, damage, or impair the Services</li>
                                <li>Use any robot, spider, or other automated device to access or use the Services</li>
                                <li>Introduce any viruses, trojan horses, worms, or other material which is malicious</li>
                                <li>Attempt to gain unauthorized access to, interfere with, or disrupt any parts of the Services</li>
                                <li>Share or distribute test answers or solutions to other users</li>
                            </ul>
                        </section>

                        <section id="disclaimer">
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Disclaimer of Warranties</h2>
                            <div className="bg-gray-100 p-4 rounded-lg border border-gray-200 my-4">
                                <p className="text-gray-700 font-medium">
                                    THE SERVICES ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TESTPREP PRO DISCLAIMS ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                                </p>

                            </div>
                            <p className="text-gray-700">
                                TestPrep Pro does not guarantee that any practice tests or study materials will ensure your success on actual exams. Our materials are designed to help you prepare, but individual results may vary.
                            </p>
                        </section>

                        <section id="liability">
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Limitation of Liability</h2>
                            <div className="bg-gray-100 p-4 rounded-lg border border-gray-200 my-4">
                                <p className="text-gray-700 font-medium">
                                    IN NO EVENT SHALL TESTPREP PRO BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, OR USE, ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR THE USE OR INABILITY TO USE THE SERVICES.
                                </p>
                            </div>
                        </section>

                        <section id="changes">
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Changes to Terms</h2>
                            <p className="text-gray-700 mb-4">
                                TestPrep Pro reserves the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                            </p>
                            <p className="text-gray-700">
                                Your continued use of the Services after such modifications will constitute your acknowledgment and acceptance of the modified Terms.
                            </p>
                        </section>

                        <section id="law">
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">9. Governing Law</h2>
                            <p className="text-gray-700">
                                These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions. Any legal action arising out of or relating to these Terms shall be filed only in the courts located in [Your Jurisdiction], and you hereby consent and submit to the personal jurisdiction of such courts.
                            </p>
                        </section>

                        <section id="contact">
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">10. Contact Us</h2>
                            <p className="text-gray-700 mb-4">
                                If you have any questions about these Terms, please contact us at:
                            </p>
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                <p className="text-gray-700">
                                    <strong>Email:</strong> support@testpreppro.com<br />
                                    <strong>Phone:</strong> (555) 123-4567<br />
                                    <strong>Address:</strong> 123 Learning Street, Suite 101, City, State 12345
                                </p>
                            </div>
                        </section>
                    </div>

                    {/* Action Buttons */}
                    <div className="bg-gray-50 px-6 py-6 flex flex-col sm:flex-row justify-between items-center border-t border-gray-200">
                        {accepted ? (
                            <div className="w-full text-center">
                                <div className="flex items-center justify-center text-green-600 mb-2">
                                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="font-medium">Terms Accepted</span>
                                </div>
                                <p className="text-gray-600">Redirecting you to the homepage...</p>
                            </div>
                        ) : (
                            <>
                                <p className="text-gray-600 mb-4 sm:mb-0 text-center sm:text-left">
                                    By clicking &quot;Accept&quot;, you agree to be bound by these Terms
                                </p>
                                <div className="flex space-x-4">
                                    <Link href="/" className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition duration-150">
                                        Decline
                                    </Link>
                                    <button
                                        onClick={handleAccept}
                                        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-150 flex items-center"
                                    >
                                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        Accept Terms
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white mt-16">
                <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">TestPrep Pro</h3>
                            <p className="text-gray-400">
                                Your partner in test preparation success. Study smarter, not harder.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><Link href="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
                                <li><Link href="/tests" className="text-gray-400 hover:text-white transition">Tests</Link></li>
                                <li><Link href="/pricing" className="text-gray-400 hover:text-white transition">Pricing</Link></li>
                                <li><Link href="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Legal</h3>
                            <ul className="space-y-2">
                                <li><Link href="/terms" className="text-gray-400 hover:text-white transition">Terms of Service</Link></li>
                                <li><Link href="/privacy" className="text-gray-400 hover:text-white transition">Privacy Policy</Link></li>
                                <li><Link href="/cookies" className="text-gray-400 hover:text-white transition">Cookie Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 border-t border-gray-700 pt-6 text-center sm:text-left">
                        <p className="text-gray-400">&copy; {new Date().getFullYear()} TestPrep Pro. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}