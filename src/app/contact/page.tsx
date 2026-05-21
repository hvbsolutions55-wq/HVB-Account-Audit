"use client";

import { useState, useCallback } from "react";
import { Mail, Phone, MapPin, Clock, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { services } from "@/data/services";
import { PRIMARY_CTA_LABEL } from "@/lib/cta";

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "";

if (!FORMSPREE_ENDPOINT) {
  console.warn("NEXT_PUBLIC_FORMSPREE_ENDPOINT is not set in environment variables");
}

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
};

const contactDetails = [
  {
    id: 1,
    title: "Address",
    icon: MapPin,
    lines: ["123 Finance Street", "London", "EC1A 1BB", "United Kingdom"],
  },
  {
    id: 2,
    title: "Phone",
    icon: Phone,
    lines: ["+44 (0)20 7123 4567"],
    href: "tel:+442071234567",
    meta: "Mon-Fri, 9am-5pm GMT",
  },
  {
    id: 3,
    title: "Email",
    icon: Mail,
    lines: ["info@hvb-solutions.com"],
    href: "mailto:info@hvb-solutions.com",
    meta: "We respond within 24 hours",
  },
  {
    id: 4,
    title: "Office Hours",
    icon: Clock,
    lines: ["Monday - Friday: 9am - 5pm GMT", "Saturday - Sunday: Closed"],
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateForm = useCallback((): boolean => {
    // Name validation - required
    if (!formData.name.trim()) {
      setError("Please enter your full name.");
      return false;
    }

    // Email validation - required and format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      setError("Please enter your email address.");
      return false;
    }
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return false;
    }

    // Message validation - required
    if (!formData.message.trim()) {
      setError("Please enter your message.");
      return false;
    }

    return true;
  }, [formData.name, formData.email, formData.message]);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setError(null);

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          service: formData.service,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setError(null);
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
      } else {
        throw new Error(data.error || "Submission failed. Please try again.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    // Clear error when user starts typing
    if (error) {
      setError(null);
    }
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.14),_transparent_20%),linear-gradient(135deg,_rgba(15,23,42,0.06),_white_40%,_rgba(248,250,252,0.96)_100%)] py-8 sm:py-10 xl:py-12">
          <div className="mx-auto w-full max-w-[1880px] px-4 sm:px-6 lg:px-10 xl:px-12">
            <div className="mx-auto max-w-[1700px]">
              <div className="max-w-2xl">
                <div className="mb-4 inline-flex items-center rounded-full border border-[#d4af37]/35 bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#b88b16] backdrop-blur">
                  Contact Our Team
                </div>
                <h1 className="mb-3 text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl xl:text-[2.8rem]">
                  Contact HVB Solutions
                </h1>
                <p className="max-w-xl text-base leading-7 text-[#5b6678] xl:text-lg">
                  Get in touch with our expert team. We&apos;re here to help with
                  all your accounting and auditing needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="bg-[#f8fafc] py-8 sm:py-10 xl:py-12">
          <div className="mx-auto w-full max-w-[1880px] px-4 sm:px-6 lg:px-10 xl:px-12">
            <div className="mx-auto max-w-[1700px]">
              <div className="grid gap-8 xl:grid-cols-[1.08fr_0.92fr] xl:items-start xl:gap-10 2xl:gap-12">
                <Card className="rounded-[28px] border border-[#e2e8f0] bg-white py-0 shadow-[0_22px_60px_rgba(15,23,42,0.08)]">
                  <CardHeader className="px-6 pt-6 sm:px-8 sm:pt-8 xl:px-10 xl:pt-10">
                    <div className="mb-3 inline-flex w-fit items-center rounded-full bg-[#f8fafc] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#64748b]">
                      Consultation Form
                    </div>
                    <CardTitle className="text-2xl font-bold text-[#0f172a] xl:text-[2rem]">
                      {PRIMARY_CTA_LABEL}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 pb-6 sm:px-8 sm:pb-8 xl:px-10 xl:pb-10">
                    {isSuccess && (
                      <div className="mb-6 flex items-center gap-3 rounded-2xl border border-green-200 bg-green-50 p-4 text-green-800" role="alert">
                        <CheckCircle2 className="h-5 w-5" />
                        <span>Your consultation request has been sent successfully.</span>
                      </div>
                    )}
                    {error && (
                      <div className="mb-6 flex items-center gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-800" role="alert">
                        <AlertCircle className="h-5 w-5" />
                        <span>{error}</span>
                      </div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-[#0f172a]">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="John Smith"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="h-12 rounded-xl border-[#d7dde6] bg-[#fcfdff] px-4 text-base"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium text-[#0f172a]">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="h-12 rounded-xl border-[#d7dde6] bg-[#fcfdff] px-4 text-base"
                          />
                        </div>
                      </div>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium text-[#0f172a]">Phone Number</label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="+44 (0)20 7123 4567"
                            value={formData.phone}
                            onChange={handleChange}
                            className="h-12 rounded-xl border-[#d7dde6] bg-[#fcfdff] px-4 text-base"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="company" className="text-sm font-medium text-[#0f172a]">Company Name</label>
                          <Input
                            id="company"
                            name="company"
                            placeholder="Your Company Ltd"
                            value={formData.company}
                            onChange={handleChange}
                            className="h-12 rounded-xl border-[#d7dde6] bg-[#fcfdff] px-4 text-base"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="service" className="text-sm font-medium text-[#0f172a]">Service Interest</label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="h-12 w-full rounded-xl border border-[#d7dde6] bg-[#fcfdff] px-4 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          <option value="">Select a service...</option>
                          {services.map((service) => (
                            <option key={service.id} value={service.title}>
                              {service.title}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-[#0f172a]">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your requirements..."
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="min-h-32 rounded-2xl border-[#d7dde6] bg-[#fcfdff] px-4 py-3 text-base"
                        />
                      </div>
                      <Button type="submit" size="lg" className="h-12 w-full rounded-xl bg-primary text-base font-semibold shadow-[0_16px_30px_rgba(15,23,42,0.12)] hover:bg-primary/90" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <Card className="rounded-[28px] border border-[#d9dee7] bg-white py-0 shadow-[0_22px_60px_rgba(15,23,42,0.08)]">
                    <CardHeader className="px-6 pt-6 sm:px-8 sm:pt-8 xl:px-10 xl:pt-10">
                      <div className="mb-3 inline-flex w-fit items-center rounded-full bg-[#f8fafc] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#64748b]">
                        Reach Us Directly
                      </div>
                      <CardTitle className="text-2xl font-semibold tracking-tight text-[#0f172a] sm:text-[2rem]">
                        Contact Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-6 pb-6 sm:px-8 sm:pb-8 xl:px-10 xl:pb-10">
                      <div className="grid gap-4 md:grid-cols-2">
                        {contactDetails.map((item) => {
                          const Icon = item.icon;
                          return (
                            <div
                              key={item.id}
                              className="rounded-[22px] border border-[#eef2f7] bg-[linear-gradient(180deg,_#ffffff_0%,_#fbfdff_100%)] p-4 shadow-[0_10px_24px_rgba(15,23,42,0.04)] transition-transform duration-200 hover:-translate-y-0.5"
                            >
                              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef2f7] text-[#111827]">
                                <Icon className="h-6 w-6" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-lg font-semibold text-[#111827]">
                                  {item.title}
                                </div>
                                <div className="mt-2 space-y-1 text-sm leading-7 text-[#6b7280] sm:text-[0.95rem]">
                                  {item.lines.map((line, index) => (
                                    item.href && index === 0 ? (
                                      <a
                                        key={line}
                                        href={item.href}
                                        className="block text-[#223457] transition-colors hover:text-[#0f172a]"
                                      >
                                        {line}
                                      </a>
                                    ) : (
                                      <div key={line}>{line}</div>
                                    )
                                  ))}
                                </div>
                                {item.meta ? (
                                  <div className="mt-3 text-sm text-[#7b8698]">
                                    {item.meta}
                                  </div>
                                ) : null}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="rounded-[28px] border border-[#d9dee7] bg-white py-0 shadow-[0_18px_48px_rgba(15,23,42,0.06)]">
                    <CardHeader className="px-6 pt-6 sm:px-8 sm:pt-8 xl:px-10 xl:pt-10">
                      <CardTitle className="text-lg font-semibold text-[#0f172a] xl:text-xl">
                        Office Location
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-6 pb-6 sm:px-8 sm:pb-8 xl:px-10 xl:pb-10">
                      <div className="relative flex h-40 items-center justify-center overflow-hidden rounded-[24px] border border-[#eef2f7] bg-gradient-to-br from-[#f8fafc] to-[#eef2f7]">
                        <div className="text-center text-[#64748b]">
                          <MapPin className="mx-auto mb-3 h-9 w-9 text-[#0f172a]" />
                          <div className="text-base font-medium text-[#0f172a]">London Office</div>
                          <div className="mt-1 text-sm">City of London, UK</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-gradient-to-br from-secondary/20 to-white">
          <div className="mx-auto w-full max-w-[1880px] px-4 sm:px-6 lg:px-10 xl:px-12">
            <div className="mx-auto max-w-[1700px]">
              <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-center">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  {
                    question: "How quickly do you respond to inquiries?",
                    answer: "We aim to respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.",
                  },
                  {
                    question: "Do you offer free initial consultations?",
                    answer: "Yes! We offer a complimentary 30-minute consultation to discuss your requirements and how we can help.",
                  },
                  {
                    question: "Can you work with businesses outside London?",
                    answer: "Absolutely! While our main office is in London, we serve clients across the UK and internationally. Most consultations can be done remotely.",
                  },
                  {
                    question: "What industries do you specialize in?",
                    answer: "We have extensive experience across technology, manufacturing, healthcare, retail, and professional services. We can adapt to any industry.",
                  },
                ].map((faq, index) => (
                  <Card key={index} className="border-primary/10">
                    <CardHeader>
                      <CardTitle className="text-base font-medium">{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
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
