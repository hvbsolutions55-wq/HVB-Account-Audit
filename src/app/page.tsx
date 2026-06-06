import Link from "next/link";
import {
  ArrowRight,
  LineChart,
  ClipboardList,
  Calculator,
  Building2,
  ShieldCheck,
  Briefcase,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageShell } from "@/components/page-shell";
import { services, getServiceHref } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { HowItWorksProcess } from "@/components/how-it-works-process";
import { HomeHero } from "@/components/home-hero";
import { homeIntroParagraphs, homeServicesIntro } from "@/data/site-content";
import {
  PRIMARY_CTA_HREF,
  PRIMARY_CTA_LABEL,
} from "@/lib/cta";

const serviceIcons: Record<string, LucideIcon> = {
  LineChart,
  ClipboardList,
  Calculator,
  Building2,
  ShieldCheck,
  Briefcase,
};

export default function Home() {
  return (
    <PageShell>
      <HomeHero />

      <section className="section-space-compact bg-[#f8fafc]">
        <div className="site-shell">
          <div className="site-shell-inner max-w-4xl space-y-5 text-base leading-8 text-[#5b6678] sm:text-lg">
            {homeIntroParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
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
              <p className="mx-auto mt-4 max-w-3xl text-base text-gray-600 sm:text-lg">
                {homeServicesIntro}
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

      <section
        id="how-it-works"
        className="section-space bg-[radial-gradient(circle_at_top_right,_rgba(212,175,55,0.1),_transparent_25%),linear-gradient(180deg,_#f8fafc_0%,_#ffffff_100%)]"
      >
        <div className="site-shell">
          <div className="site-shell-inner">
            <HowItWorksProcess compact />
            <div className="mt-10 text-center lg:mt-12">
              <Link
                href="/how-it-works"
                className="text-sm font-semibold text-[#0f172a] transition-colors hover:text-[#b88b16]"
              >
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
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
              {testimonials.map((testimonial) => (
                <Card
                  key={testimonial.id}
                  className="border border-[#e8e8e8] bg-white shadow-[0_4px_20px_rgba(15,23,42,0.06)] transition-shadow hover:shadow-[0_8px_28px_rgba(15,23,42,0.1)]"
                >
                  <CardContent className="flex h-full flex-col justify-between p-6 sm:p-8">
                    <p className="font-serif text-base italic leading-relaxed text-[#4a4a4a] sm:text-lg">
                      {testimonial.content}
                    </p>
                    <p className="mt-6 text-sm sm:text-base">
                      <span className="font-semibold text-[#0f172a]">— {testimonial.name}</span>
                      <span className="text-[#5b6678]">, {testimonial.role}</span>
                    </p>
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
              Schedule a free consultation and discover how outsourced CFO, accounting, and
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
