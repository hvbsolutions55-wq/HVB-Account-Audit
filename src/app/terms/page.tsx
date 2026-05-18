import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary/10 via-white to-secondary/10 py-20">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Terms & Conditions</h1>
              <p className="text-lg text-muted-foreground">
                Please read these terms carefully before using HVB Solutions' services.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-white">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto prose prose-lg">
              <p className="text-sm text-muted-foreground mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using HVB Solutions' website and services, you agree to be bound by these Terms & Conditions. If you do not agree to these terms, please do not use our services.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">2. Use of Website Content</h2>
              <p>
                The content on this website, including text, graphics, logos, images, and software, is the property of HVB Solutions or its content suppliers and is protected by copyright and other intellectual property laws.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information obtained from this website</li>
                <li>You may not use the website for any illegal purpose or in any manner that could damage, disable, overburden, or impair the website</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">3. No Professional Advice Disclaimer</h2>
              <p>
                <strong>Important:</strong> The information provided on this website is for general informational purposes only and does not constitute professional accounting, tax, legal, or financial advice.
              </p>
              <p>
                You should not rely on this information as a substitute for professional advice. Before making any financial decisions or taking any action based on the information provided, you should consult with a qualified professional accountant or financial advisor.
              </p>
              <p>
                HVB Solutions disclaims all liability and responsibility arising from any reliance placed on such materials by you or any other visitor to the website.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">4. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, HVB Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your access to or use of or inability to access or use the website</li>
                <li>Any conduct or content of any third party on the website</li>
                <li>Any content obtained from the website</li>
                <li>Unauthorized access, use, or alteration of your transmissions or content</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">5. Intellectual Property</h2>
              <p>
                All materials on this website, including but not limited to text, graphics, logos, images, and software, are the property of HVB Solutions or its content suppliers and are protected by international copyright, trademark, and other intellectual property laws.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">6. Governing Law</h2>
              <p>
                These Terms & Conditions shall be governed by and construed in accordance with the laws of the United Kingdom. Any disputes arising from or relating to these terms shall be resolved in the courts of England and Wales.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">7. Changes to Terms</h2>
              <p>
                HVB Solutions reserves the right to modify these terms at any time. Changes will be effective immediately upon posting on the website. Your continued use of the website after the posting of changes constitutes your acceptance of such changes.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">8. Contact Information</h2>
              <p>
                If you have any questions about these Terms & Conditions, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p><strong>HVB Solutions</strong></p>
                <p>Email: info@hvb-solutions.com</p>
                <p>Phone: +44 (0)20 7123 4567</p>
                <p>Address: 123 Finance Street, London, UK</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}