"use client";

import Script from "next/script";

const TAWK_SRC = "https://embed.tawk.to/6a3287a6c770bc1d46b1f693/1jram3pf3";

export default function TawkChat() {
  return (
    <>
      <Script id="tawk-init" strategy="afterInteractive">
        {`window.Tawk_API=window.Tawk_API||{};window.Tawk_LoadStart=new Date();`}
      </Script>
      <Script src={TAWK_SRC} strategy="lazyOnload" />
    </>
  );
}
