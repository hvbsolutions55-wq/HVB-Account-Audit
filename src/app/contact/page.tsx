"use client";

import { useState, useCallback } from "react";
import { Mail, Phone, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PageShell } from "@/components/page-shell";
import { services } from "@/data/services";
import { PRIMARY_CTA_LABEL } from "@/lib/cta";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF } from "@/lib/site";

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "";

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
};

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
    if (!formData.name.trim()) {
      setError("Please enter your full name.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    if (!formData.message.trim()) {
      setError("Please enter your message.");
      return false;
    }
    return true;
  }, [formData.name, formData.email, formData.message]);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setError(null);
    if (!validateForm()) return;

    if (!FORMSPREE_ENDPOINT) {
      setError("Contact form is not configured yet. Please email us directly.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" });
      } else {
        throw new Error(data.error || "Submission failed. Please try again.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      if (error) setError(null);
    },
    [error],
  );

  return (
    <PageShell>
      <section className="section-space-tight bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.14),_transparent_20%),linear-gradient(135deg,_rgba(15,23,42,0.06),_white_40%,_rgba(248,250,252,0.96)_100%)]">
        <div className="site-shell">
          <div className="site-shell-inner max-w-2xl">
            <h1 className="mb-3 text-3xl font-bold text-[#0f172a] sm:text-4xl">Contact HVB Solutions</h1>
            <p className="text-base leading-7 text-[#5b6678]">
              Get in touch for a free consultation on outsourced CFO, accounting, and audit support.
            </p>
          </div>
        </div>
      </section>

      <section className="section-space bg-[#f8fafc]">
        <div className="site-shell">
          <div className="site-shell-inner grid gap-8 xl:grid-cols-[1.1fr_0.9fr] xl:gap-10">
            <Card className="rounded-[28px] border border-[#e2e8f0] bg-white shadow-lg">
              <CardHeader className="px-6 pt-6 sm:px-8">
                <CardTitle className="text-2xl font-bold text-[#0f172a]">{PRIMARY_CTA_LABEL}</CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-8 sm:px-8">
                {isSuccess && (
                  <div className="mb-6 flex items-center gap-3 rounded-2xl border border-green-200 bg-green-50 p-4 text-green-800">
                    <CheckCircle2 className="h-5 w-5" />
                    <span>Your message has been sent successfully.</span>
                  </div>
                )}
                {error && (
                  <div className="mb-6 flex items-center gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-800">
                    <AlertCircle className="h-5 w-5" />
                    <span>{error}</span>
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <Input id="name" name="name" required value={formData.name} onChange={handleChange} className="h-12 rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className="h-12 rounded-xl" />
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                      <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className="h-12 rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">Company</label>
                      <Input id="company" name="company" value={formData.company} onChange={handleChange} className="h-12 rounded-xl" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium">Service Interest</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="h-12 w-full rounded-xl border border-input bg-background px-4 text-base"
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
                    <label htmlFor="message" className="text-sm font-medium">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} className="rounded-2xl" />
                  </div>
                  <Button type="submit" size="lg" className="h-12 w-full rounded-xl" disabled={isSubmitting}>
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
              <Card className="rounded-[28px] border border-[#e2e8f0] bg-white">
                <CardHeader>
                  <CardTitle className="text-xl text-[#0f172a]">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 px-6 pb-8">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef2f7]">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#0f172a]">Phone</div>
                      <a href={CONTACT_PHONE_HREF} className="mt-1 block text-[#5b6678] hover:text-[#0f172a]">
                        {CONTACT_PHONE}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef2f7]">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-[#0f172a]">Email</div>
                      <a href={`mailto:${CONTACT_EMAIL}`} className="mt-1 block text-[#5b6678] hover:text-[#0f172a]">
                        {CONTACT_EMAIL}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
