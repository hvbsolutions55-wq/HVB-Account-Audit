import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "HVB Solutions | Fractional CFO, Accounting & Audit Support",
  description:
    "Professional fractional CFO, accounting and audit support services. Outsourced finance expertise for businesses across the USA, UK, Europe, and beyond.",
  keywords: [
    "HVB Solutions",
    "fractional CFO",
    "outsourced accounting",
    "audit support",
    "corporate services",
    "controller advisory",
  ],
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
