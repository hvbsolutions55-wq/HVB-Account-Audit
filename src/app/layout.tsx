import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "HVB Solutions | Global Accounting, Finance & Audit Services",
  description: "Global Professional Accounting, Finance & Audit Services. Fractional CFO, Audit and Accounting Support designed to help you achieve your financial goals. 5+ years of excellence.",
  keywords: ["HVB Solutions", "accounting", "audit", "tax consulting", "financial advisory", "business advisory", "fractional CFO", "CPA"],
  authors: [{ name: "HVB Solutions" }],
  openGraph: {
    title: "HVB Solutions | Global Accounting, Finance & Audit Services",
    description: "Professional accounting and auditing services designed to help you achieve your financial goals.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-full flex flex-col antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
