import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script';


const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700']
})

export const metadata: Metadata = {
  title: "Your Path to Passing",
  description: "Study smart, track your progress, and get exam-ready with real sample questions.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html className={inter.className}>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body>
        {children}
        
        <Script 
          src="https://cdn.tailwindcss.com?plugins=forms,container-queries" 
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
