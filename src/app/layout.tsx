import type { Metadata } from "next";
import { Inter   } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700']
})

export const metadata: Metadata = {
  title: "Your Path to Passing",
  description: "Study smart, track your progress, and get exam-ready with real sample questions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={inter.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
