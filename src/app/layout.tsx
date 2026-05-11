import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Accounts Audit | Professional Accounting & Audit Services",
  description: "Expert accounting and auditing services for businesses of all sizes. Audit & Assurance, Tax Consulting, Financial Advisory, and Business Advisory. Trusted by 500+ businesses.",
  keywords: ["accounting", "audit", "tax consulting", "financial advisory", "business advisory", "CPA", "accountant"],
  authors: [{ name: "Accounts Audit" }],
  openGraph: {
    title: "Accounts Audit | Professional Accounting & Audit Services",
    description: "Expert accounting and auditing services for businesses of all sizes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
