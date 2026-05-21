import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const LAST_UPDATED = "May 21, 2026";

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.14),_transparent_20%),linear-gradient(135deg,_rgba(15,23,42,0.06),_white_40%,_rgba(248,250,252,0.96)_100%)] section-space-tight">
          <div className="site-shell">
            <div className="site-shell-inner">
              <div className="max-w-2xl">
                <div className="mb-4 inline-flex items-center rounded-full border border-[#d4af37]/35 bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#b88b16] backdrop-blur">
                  Legal Information
                </div>
                <h1 className="mb-4 text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl xl:text-[2.8rem]">
                  Privacy Policy
                </h1>
                <p className="max-w-xl text-base leading-7 text-[#5b6678] xl:text-lg">
                  This policy explains how HVB Solutions collects, uses, stores,
                  and protects the information you share with us.
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
                  <h2>1. Information We Collect</h2>
                  <p>
                    HVB Solutions collects information you provide directly to us
                    when you use our services, including:
                  </p>
                  <ul>
                    <li>
                      <strong>Name and Contact Details:</strong> Name, email
                      address, phone number, and mailing address
                    </li>
                    <li>
                      <strong>Business Information:</strong> Company name,
                      industry, and financial details relevant to our services
                    </li>
                    <li>
                      <strong>Communication:</strong> Messages, inquiries, and
                      other communications you send to us
                    </li>
                    <li>
                      <strong>Usage Data:</strong> Information about how you
                      access and use our website
                    </li>
                  </ul>

                  <h2>2. How We Use Your Information</h2>
                  <p>We use the information we collect to:</p>
                  <ul>
                    <li>
                      Provide, maintain, and improve our accounting and audit
                      services
                    </li>
                    <li>Process your requests and respond to your inquiries</li>
                    <li>
                      Send you technical notices, updates, security alerts, and
                      support messages
                    </li>
                    <li>
                      Communicate with you about products, services, and events
                    </li>
                    <li>
                      Monitor and analyze trends, usage, and activities in
                      connection with our services
                    </li>
                  </ul>

                  <h2>3. Data Security</h2>
                  <p>
                    We implement appropriate technical and organizational
                    measures to protect your personal information against
                    unauthorized or unlawful processing, accidental loss,
                    destruction, or damage. However, no method of transmission
                    over the internet is completely secure, and we cannot
                    guarantee absolute security.
                  </p>

                  <h2>4. Third-Party Services</h2>
                  <p>
                    We may share your information with trusted third-party
                    service providers who assist us in operating our services,
                    conducting our business, or servicing our users. These third
                    parties have access to your personal information only to
                    perform specific tasks on our behalf and are obligated not
                    to disclose or use it for any other purpose.
                  </p>

                  <h2>5. Cookies</h2>
                  <p>
                    Our website uses cookies to enhance your browsing
                    experience, analyze site traffic, and for security purposes.
                    You can choose to accept or decline cookies through your
                    browser settings. Please note that some features of our
                    services may not function properly if cookies are disabled.
                  </p>

                  <h2>6. Your Rights</h2>
                  <p>You have the right to:</p>
                  <ul>
                    <li>Access and obtain a copy of your personal data</li>
                    <li>Rectify any inaccurate or incomplete personal data</li>
                    <li>Request the deletion of your personal data</li>
                    <li>
                      Object to or restrict the processing of your personal data
                    </li>
                    <li>Request the transfer of your personal data</li>
                    <li>Withdraw your consent at any time</li>
                  </ul>
                </div>

                <div className="mt-10 rounded-[24px] border border-[#e2e8f0] bg-[linear-gradient(180deg,_#ffffff_0%,_#fbfdff_100%)] p-6">
                  <h2 className="text-xl font-semibold text-[#0f172a]">
                    7. Contact Information
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-[#5b6678] sm:text-[15px]">
                    If you have any questions about this Privacy Policy or our
                    data practices, please contact us at:
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
