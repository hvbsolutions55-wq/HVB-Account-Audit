import { PageShell } from "@/components/page-shell";
import { CONTACT_EMAIL } from "@/lib/site";

const LAST_UPDATED = "May 21, 2026";

export default function TermsPage() {
  return (
    <PageShell>
      <section className="section-space-tight bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.14),_transparent_20%),linear-gradient(135deg,_rgba(15,23,42,0.06),_white_40%,_rgba(248,250,252,0.96)_100%)]">
        <div className="site-shell">
          <div className="site-shell-inner max-w-2xl">
            <h1 className="mb-4 text-3xl font-bold text-[#0f172a] sm:text-4xl">Terms &amp; Conditions</h1>
            <p className="text-base leading-7 text-[#5b6678]">
              Please read these terms carefully before using HVB Solutions&apos; website or
              engaging with our services.
            </p>
          </div>
        </div>
      </section>

      <section className="section-space bg-[#f8fafc]">
        <div className="site-shell">
          <div className="site-shell-inner">
            <div className="surface-card mx-auto max-w-4xl border-[#d9e0ea] bg-white px-6 py-8 sm:px-10">
              <p className="mb-8 text-xs font-semibold uppercase tracking-wide text-[#64748b]">
                Last updated: {LAST_UPDATED}
              </p>

              <div className="prose prose-lg max-w-none text-[#475569] prose-headings:text-[#0f172a]">
                <h2>1. Acceptance of Terms</h2>
                <p>
                  By accessing or using HVB Solutions&apos; website and services, you agree to
                  be bound by these Terms &amp; Conditions.
                </p>

                <h2>2. Use of Website Content</h2>
                <p>
                  The content on this website is the property of HVB Solutions or its content
                  suppliers and is protected by applicable intellectual property laws.
                </p>

                <h2>3. No Professional Advice Disclaimer</h2>
                <p>
                  Information on this website is for general informational purposes only and does
                  not constitute professional accounting, tax, legal, or financial advice. Consult
                  a qualified professional before making financial decisions.
                </p>

                <h2>4. Limitation of Liability</h2>
                <p>
                  To the fullest extent permitted by law, HVB Solutions shall not be liable for
                  indirect, incidental, special, consequential, or punitive damages arising from
                  use of the website or services.
                </p>

                <h2>5. Intellectual Property</h2>
                <p>
                  All materials on this website are the property of HVB Solutions or its content
                  suppliers and are protected by international copyright and trademark laws.
                </p>

                <h2>7. Changes to Terms</h2>
                <p>
                  HVB Solutions reserves the right to modify these terms at any time. Changes are
                  effective upon posting. Continued use constitutes acceptance of updated terms.
                </p>

                <p className="mt-8 text-sm text-[#64748b]">
                  Questions? Contact us at{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-[#0f172a]">
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
