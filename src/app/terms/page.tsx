import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const LAST_UPDATED = "May 21, 2026";

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.14),_transparent_20%),linear-gradient(135deg,_rgba(15,23,42,0.06),_white_40%,_rgba(248,250,252,0.96)_100%)] section-space-tight">
          <div className="site-shell">
            <div className="site-shell-inner">
              <div className="max-w-2xl">
                <div className="mb-4 inline-flex items-center rounded-full border border-[#d4af37]/35 bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#b88b16] backdrop-blur">
                  Client Terms
                </div>
                <h1 className="mb-4 text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl xl:text-[2.8rem]">
                  Terms &amp; Conditions
                </h1>
                <p className="max-w-xl text-base leading-7 text-[#5b6678] xl:text-lg">
                  Please read these terms carefully before using HVB Solutions&apos;
                  website or engaging with our services.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-space bg-[#f8fafc]">
          <div className="site-shell">
            <div className="site-shell-inner">
              <div className="surface-card mx-auto max-w-4xl border-[#d9e0ea] bg-white px-6 py-6 sm:px-8 sm:py-8 lg:px-10">
                <div className="mb-8 inline-flex items-center rounded-full bg-[#f8fafc] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#64748b]">
                  Last updated: {LAST_UPDATED}
                </div>

                <div className="prose prose-lg max-w-none text-[#475569] prose-headings:text-[#0f172a] prose-p:leading-8 prose-li:leading-8 prose-strong:text-[#0f172a]">
                  <h2>1. Acceptance of Terms</h2>
                  <p>
                    By accessing or using HVB Solutions&apos; website and
                    services, you agree to be bound by these Terms &amp;
                    Conditions. If you do not agree to these terms, please do
                    not use our services.
                  </p>

                  <h2>2. Use of Website Content</h2>
                  <p>
                    The content on this website, including text, graphics,
                    logos, images, and software, is the property of HVB
                    Solutions or its content suppliers and is protected by
                    copyright and other intellectual property laws.
                  </p>
                  <ul>
                    <li>
                      You may not modify, copy, distribute, transmit, display,
                      perform, reproduce, publish, license, create derivative
                      works from, transfer, or sell any information obtained
                      from this website
                    </li>
                    <li>
                      You may not use the website for any illegal purpose or in
                      any manner that could damage, disable, overburden, or
                      impair the website
                    </li>
                  </ul>

                  <h2>3. No Professional Advice Disclaimer</h2>
                  <p>
                    <strong>Important:</strong> The information provided on this
                    website is for general informational purposes only and does
                    not constitute professional accounting, tax, legal, or
                    financial advice.
                  </p>
                  <p>
                    You should not rely on this information as a substitute for
                    professional advice. Before making any financial decisions
                    or taking any action based on the information provided, you
                    should consult with a qualified professional accountant or
                    financial advisor.
                  </p>
                  <p>
                    HVB Solutions disclaims all liability and responsibility
                    arising from any reliance placed on such materials by you or
                    any other visitor to the website.
                  </p>

                  <h2>4. Limitation of Liability</h2>
                  <p>
                    To the fullest extent permitted by law, HVB Solutions shall
                    not be liable for any indirect, incidental, special,
                    consequential, or punitive damages, including without
                    limitation, loss of profits, data, use, goodwill, or other
                    intangible losses, resulting from:
                  </p>
                  <ul>
                    <li>
                      Your access to or use of or inability to access or use the
                      website
                    </li>
                    <li>Any conduct or content of any third party on the website</li>
                    <li>Any content obtained from the website</li>
                    <li>
                      Unauthorized access, use, or alteration of your
                      transmissions or content
                    </li>
                  </ul>

                  <h2>5. Intellectual Property</h2>
                  <p>
                    All materials on this website, including but not limited to
                    text, graphics, logos, images, and software, are the
                    property of HVB Solutions or its content suppliers and are
                    protected by international copyright, trademark, and other
                    intellectual property laws.
                  </p>

                  <h2>6. Governing Law</h2>
                  <p>
                    These Terms &amp; Conditions shall be governed by and
                    construed in accordance with the laws of the United Kingdom.
                    Any disputes arising from or relating to these terms shall
                    be resolved in the courts of England and Wales.
                  </p>

                  <h2>7. Changes to Terms</h2>
                  <p>
                    HVB Solutions reserves the right to modify these terms at
                    any time. Changes will be effective immediately upon posting
                    on the website. Your continued use of the website after the
                    posting of changes constitutes your acceptance of such
                    changes.
                  </p>
                </div>

                <div className="mt-10 rounded-[24px] border border-[#e2e8f0] bg-[linear-gradient(180deg,_#ffffff_0%,_#fbfdff_100%)] p-6">
                  <h2 className="text-xl font-semibold text-[#0f172a]">
                    8. Contact Information
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-[#5b6678] sm:text-[15px]">
                    If you have any questions about these Terms &amp;
                    Conditions, please contact us at:
                  </p>
                  <div className="mt-4 space-y-1 text-sm leading-7 text-[#0f172a] sm:text-[15px]">
                    <p><strong>HVB Solutions</strong></p>
                    <p>Email: info@hvb-solutions.com</p>
                    <p>Phone: +44 (0)20 7123 4567</p>
                    <p>Address: 123 Finance Street, London, UK</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
