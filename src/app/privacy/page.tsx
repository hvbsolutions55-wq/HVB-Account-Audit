import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary/10 via-white to-secondary/10 py-20">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Privacy Policy</h1>
              <p className="text-lg text-muted-foreground">
                Your privacy is important to us. This policy explains how HVB Solutions collects, uses, and protects your information.
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

              <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
              <p>
                HVB Solutions collects information you provide directly to us when you use our services, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Name and Contact Details:</strong> Name, email address, phone number, and mailing address</li>
                <li><strong>Business Information:</strong> Company name, industry, and financial details relevant to our services</li>
                <li><strong>Communication:</strong> Messages, inquiries, and other communications you send to us</li>
                <li><strong>Usage Data:</strong> Information about how you access and use our website</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve our accounting and audit services</li>
                <li>Process your requests and respond to your inquiries</li>
                <li>Send you technical notices, updates, security alerts, and support messages</li>
                <li>Communicate with you about products, services, and events</li>
                <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">3. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">4. Third-Party Services</h2>
              <p>
                We may share your information with trusted third-party service providers who assist us in operating our services, conducting our business, or servicing our users. These third parties have access to your personal information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">5. Cookies</h2>
              <p>
                Our website uses cookies to enhance your browsing experience, analyze site traffic, and for security purposes. You can choose to accept or decline cookies through your browser settings. Please note that some features of our services may not function properly if cookies are disabled.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access and obtain a copy of your personal data</li>
                <li>Rectify any inaccurate or incomplete personal data</li>
                <li>Request the deletion of your personal data</li>
                <li>Object to or restrict the processing of your personal data</li>
                <li>Request the transfer of your personal data</li>
                <li>Withdraw your consent at any time</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">7. Contact Information</h2>
              <p>
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
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