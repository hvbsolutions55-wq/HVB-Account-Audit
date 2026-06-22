import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import TawkChat from "@/components/TawkChat";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "HVB Solutions | Fractional CFO, Accounting & Audit Support",
  description:
    "Professional fractional CFO, accounting and audit support services tailored to your business needs. Accurate, reliable, and result-driven outsourced finance expertise.",
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
    title: "HVB Solutions | Fractional CFO, Accounting & Audit Support",
    description:
      "Professional fractional CFO, accounting and audit support services tailored to your business needs. Outsourcing beyond borders.",
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
        {process.env.NODE_ENV === "development" ? (
          <Script id="suppress-tawk-console-noise" strategy="beforeInteractive">
            {`(function(){var original=console.error;console.error=function(){if(arguments.length===1&&arguments[0]===true)return;original.apply(console,arguments);};})();`}
          </Script>
        ) : null}
        {children}
        <TawkChat />
      </body>
    </html>
  );
}
