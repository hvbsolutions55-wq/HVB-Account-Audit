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
        {/* Header */}
        <section className="bg-gradient-to-br from-primary/10 via-white to-secondary/10 py-20">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">Contact HVB Solutions</h1>
              <p className="text-lg text-muted-foreground">
                Get in touch with our expert team. We're here to help with all your accounting and auditing needs.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20 bg-white">
          <div className="container px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Schedule a Free Consultation</h2>
                {isSuccess && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 text-green-800" role="alert">
                    <CheckCircle2 className="h-5 w-5" />
                    <span>Your consultation request has been sent successfully.</span>
                  </div>
                )}
                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3 text-red-800" role="alert">
                    <AlertCircle className="h-5 w-5" />
                    <span>{error}</span>
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Smith"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
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
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+44 (0)20 7123 4567"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">Company Name</label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Your Company Ltd"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-medium">Service Interest</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
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
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your requirements..."
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
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
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Get in Touch</h2>
                <Card className="border-primary/10">
                  <CardHeader>
                    <CardTitle className="text-lg">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">Address</div>
                        <div className="text-sm text-muted-foreground">
                          123 Finance Street<br />
                          London<br />
                          EC1A 1BB<br />
                          United Kingdom
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">Phone</div>
                        <a href="tel:+442071234567" className="text-sm text-primary hover:underline">
                          +44 (0)20 7123 4567
                        </a>
                        <div className="text-xs text-muted-foreground mt-1">Mon-Fri, 9am-5pm GMT</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">Email</div>
                        <a href="mailto:info@hvb-solutions.com" className="text-sm text-primary hover:underline">
                          info@hvb-solutions.com
                        </a>
                        <div className="text-xs text-muted-foreground mt-1">We respond within 24 hours</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">Office Hours</div>
                        <div className="text-sm text-muted-foreground">
                          Monday - Friday: 9am - 5pm GMT<br />
                          Saturday - Sunday: Closed
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-primary/5 to-secondary/10 border-primary/10">
                  <CardHeader>
                    <CardTitle className="text-lg">Office Location</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="relative h-48 rounded-lg overflow-hidden bg-primary/5 flex items-center justify-center">
                      <div className="text-center text-muted-foreground">
                        <MapPin className="h-8 w-8 mx-auto mb-2 text-primary/50" />
                        <div className="text-sm">London Office</div>
                        <div className="text-xs">City of London, UK</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-gradient-to-br from-secondary/20 to-white">
          <div className="container px-4 sm:px-6 lg:px-8">
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
        </section>
      </main>

      <Footer />
    </div>
  );
}