import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import Script from 'next/script';
import { ThemeProvider } from "next-themes";


// const inter = Inter({
//   subsets: ['latin'],
//   weight: ['400', '600', '700']
// })

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
    <html 
    // className={inter.className}
    suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="relative">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Script
          src="https://cdn.tailwindcss.com?plugins=forms,container-queries"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
