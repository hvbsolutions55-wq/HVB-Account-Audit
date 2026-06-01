import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  LineChart,
  ClipboardList,
  Calculator,
  Building2,
  ShieldCheck,
  Briefcase,
  Star,
  CalendarDays,
  BadgeCheck,
  Target,
  Users,
  LockKeyhole,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageShell } from "@/components/page-shell";
import { services, getServiceHref } from "@/data/services";
import { testimonials, homeStats } from "@/data/testimonials";
import { processSteps, processIntro } from "@/data/how-it-works";
import {
  PRIMARY_CTA_HREF,
  PRIMARY_CTA_LABEL,
  SECONDARY_CTA_HREF,
  SECONDARY_CTA_LABEL,
} from "@/lib/cta";

const serviceIcons: Record<string, LucideIcon> = {
  LineChart,
  ClipboardList,
  Calculator,
  Building2,
  ShieldCheck,
  Briefcase,
};

const heroHighlights = [
  { id: 1, title: "Certified Professionals", description: "Experienced & qualified", icon: BadgeCheck },
  { id: 2, title: "Accurate & Timely Reporting", description: "You can rely on", icon: Target },
  { id: 3, title: "Tailored Business Solutions", description: "Built around you", icon: Users },
  { id: 4, title: "Confidential & Reliable Service", description: "Your data is safe", icon: LockKeyhole },
];

export default function Home() {
  return (
    <PageShell>
      <section className="section-space-compact overflow-hidden bg-[#f8fafc]">
        <div className="site-shell">
          <div className="site-shell-inner">
            <div className="surface-card overflow-hidden shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
              <div className="grid xl:grid-cols-[1.12fr_0.88fr]">
                <div className="relative px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 lg:px-12 lg:py-14 xl:px-14 xl:py-16">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#d4af37] sm:text-sm">
                    Outsourcing beyond borders
                  </p>
                  <h1 className="text-[1.85rem] font-bold leading-[1.08] text-[#0f172a] sm:text-[2.2rem] md:text-[2.5rem] lg:text-[2.85rem]">
                    Professional Fractional CFO, Accounting and Audit Support Services
                  </h1>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-[#475569] sm:text-lg">
                    We provide accurate, reliable and result-driven financial solutions to
                    help your business grow with confidence.
                  </p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <Link href={PRIMARY_CTA_HREF}>
                      <Button
                        size="lg"
                        className="h-12 w-full rounded-xl px-6 text-sm font-semibold shadow-[0_16px_30px_rgba(15,23,42,0.16)] sm:h-14 sm:w-auto sm:px-7 sm:text-base"
                        style={{ backgroundColor: "#0F172A", color: "#F8FAFC" }}
                      >
                        <CalendarDays className="mr-2 h-5 w-5" />
                        {PRIMARY_CTA_LABEL}
                      </Button>
                    </Link>
                    <Link href={SECONDARY_CTA_HREF}>
                      <Button
                        size="lg"
                        variant="outline"
                        className="h-12 w-full rounded-xl border-[#cbd5e1] bg-white px-6 text-sm font-semibold hover:bg-[#f8fafc] sm:h-14 sm:w-auto sm:px-7 sm:text-base"
                        style={{ color: "#0F172A" }}
                      >
                        {SECONDARY_CTA_LABEL}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="relative min-h-[320px] overflow-hidden sm:min-h-[420px] lg:min-h-[520px] xl:min-h-[600px]">
                  <Image
                    src="/hero-accounting.jpg"
                    alt="Professional finance team collaboration"
                    fill
                    priority
                    sizes="(max-width: 1279px) 100vw, 44vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/8 to-white/18" />
                  <div className="absolute bottom-5 right-4 max-w-[260px] rounded-[22px] border border-white/30 bg-[#0f172a]/94 px-4 py-4 text-[#f8fafc] shadow-[0_18px_45px_rgba(15,23,42,0.3)] backdrop-blur sm:bottom-6 sm:right-6 sm:px-5">
                    <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[#d4af37]">
                      HVB Solutions
                    </div>
                    <div className="mt-2 text-lg font-bold sm:text-xl">
                      Outsourced finance expertise
                    </div>
                    <div className="mt-1 text-xs text-white/75 sm:text-sm">
                      Built on accuracy, trust, and responsive delivery.
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-4 pb-4 sm:px-6 sm:pb-6 lg:px-8 lg:pb-8">
                <div className="relative -mt-2 space-y-4 sm:-mt-4 lg:-mt-8">
                  <div className="grid gap-3 rounded-[22px] border border-[#e2e8f0] bg-white p-4 shadow-[0_20px_55px_rgba(15,23,42,0.08)] sm:grid-cols-2 sm:gap-4 sm:p-5 xl:grid-cols-4 xl:p-6">
                    {heroHighlights.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.id}
                          className={`flex items-start gap-3 ${index < heroHighlights.length - 1 ? "xl:border-r xl:border-[#e2e8f0] xl:pr-5" : ""}`}
                        >
                          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#fff8e1]">
                            <Icon className="h-6 w-6 text-[#0f172a]" />
                          </div>
                          <div>
                            <div className="text-base font-semibold text-[#0f172a]">{item.title}</div>
                            <div className="mt-1 text-sm text-[#64748b]">{item.description}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="grid gap-4 rounded-[22px] bg-[#0f172a] px-5 py-5 text-[#f8fafc] shadow-[0_24px_60px_rgba(15,23,42,0.18)] sm:grid-cols-2 sm:px-6 sm:py-6 lg:px-8">
                    {homeStats.map((stat, index) => (
                      <div
                        key={stat.id}
                        className={`flex items-start gap-4 ${index === 0 ? "sm:border-r sm:border-white/12 sm:pr-6" : ""}`}
                      >
                        <div className="text-3xl font-bold text-[#d4af37] lg:text-4xl">{stat.value}</div>
                        <div>
                          <div className="text-lg font-semibold text-white">{stat.title}</div>
                          <div className="mt-1 text-sm text-white/72">{stat.subtitle}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="site-shell">
          <div className="site-shell-inner">
            <div className="mb-12 text-center sm:mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-navy-800">
                Our Expertise
              </span>
              <h2 className="mt-3 text-2xl font-bold text-navy-900 sm:text-3xl md:text-4xl">
                Comprehensive Financial Services
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
                We provide end-to-end financial &amp; business solutions
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {services.map((service) => {
                const Icon = serviceIcons[service.icon] ?? Briefcase;
                return (
                  <Link key={service.id} href={getServiceHref(service.slug)} className="group">
                    <Card className="h-full border-0 bg-gradient-to-br from-white to-navy-50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                      <CardHeader className="text-center pb-4">
                        <div
                          className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg transition-transform group-hover:scale-110 sm:h-16 sm:w-16"
                          style={{ background: "#0F172A", color: "#FFFFFF" }}
                        >
                          <Icon className="h-7 w-7 sm:h-8 sm:w-8" />
                        </div>
                        <CardTitle className="text-lg uppercase tracking-wide text-navy-900 sm:text-xl">
                          {service.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-center text-sm text-gray-600 sm:text-base">
                          {service.description}
                        </p>
                        <div className="mt-4 text-center">
                          <span className="inline-flex items-center font-medium text-navy-800 transition-transform group-hover:translate-x-2">
                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="section-space bg-[#f8fafc]">
        <div className="site-shell">
          <div className="site-shell-inner">
            <div className="mb-12 max-w-2xl text-center mx-auto">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#b88b16]">
                Process
              </span>
              <h2 className="mt-3 text-3xl font-bold text-[#0f172a] sm:text-4xl">
                How HVB Solutions Work
              </h2>
              <p className="mt-4 text-base leading-7 text-[#5b6678]">{processIntro}</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {processSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <Card key={step.id} className="surface-card border-[#d9e0ea] bg-white">
                    <CardContent className="px-6 py-8">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0f172a] text-[#d4af37]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="text-sm font-semibold uppercase tracking-wide text-[#d4af37]">
                        Step {step.id}
                      </div>
                      <h3 className="mt-2 text-xl font-semibold text-[#0f172a]">{step.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-[#5b6678]">{step.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <div className="mt-8 text-center">
              <Link href="/how-it-works" className="text-sm font-semibold text-[#0f172a] hover:text-[#b88b16]">
                View full process →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-gradient-to-br from-navy-50 to-white">
        <div className="site-shell">
          <div className="site-shell-inner">
            <div className="mb-12 text-center sm:mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-navy-800">
                Testimonials
              </span>
              <h2 className="mt-3 text-2xl font-bold text-navy-900 sm:text-3xl md:text-4xl">
                What Our Clients Say
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="border-0 bg-white hover:shadow-xl">
                  <CardContent className="p-4 sm:p-6">
                    <div className="mb-4 flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-[#0f172a] text-[#0f172a]" />
                      ))}
                    </div>
                    <p className="mb-4 line-clamp-4 text-sm italic text-gray-600 sm:text-base">
                      {testimonial.content}
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-navy-800 to-navy-900 text-sm font-semibold text-white sm:h-12 sm:w-12">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-navy-900">{testimonial.name}</div>
                        <div className="text-xs text-gray-500">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space relative overflow-hidden bg-gradient-to-r from-navy-800 via-navy-900 to-slate-900 text-white">
        <div className="site-shell">
          <div className="site-shell-inner relative z-10 flex flex-col items-center py-4 text-center">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
              Ready to strengthen your finance function?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-200 sm:text-lg">
              Book a free consultation and discover how outsourced CFO, accounting, and
              audit support can work for your business.
            </p>
            <Link href={PRIMARY_CTA_HREF} className="mt-8">
              <Button
                size="lg"
                className="rounded-full px-8 py-6 text-base font-semibold shadow-xl sm:text-lg"
                style={{ backgroundColor: "#D4AF37", color: "#0F172A" }}
              >
                {PRIMARY_CTA_LABEL} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
