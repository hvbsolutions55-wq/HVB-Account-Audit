import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Briefcase,
  CalendarDays,
  LockKeyhole,
  Target,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { homeStats } from "@/data/testimonials";
import {
  PRIMARY_CTA_HREF,
  PRIMARY_CTA_LABEL,
  SECONDARY_CTA_HREF,
  SECONDARY_CTA_LABEL,
} from "@/lib/cta";

const heroHighlights = [
  { id: 1, title: "Certified Professionals", description: "Experienced & qualified", icon: BadgeCheck },
  { id: 2, title: "Accurate & Timely Reporting", description: "You can rely on", icon: Target },
  { id: 3, title: "Tailored Business Solutions", description: "Built around you", icon: Users },
  { id: 4, title: "Confidential & Reliable Service", description: "Your data is safe", icon: LockKeyhole },
];

const statIcons: LucideIcon[] = [Award, Users, Briefcase];

export function HomeHero() {
  return (
    <section className="section-space-compact overflow-hidden bg-[#f3f4f6]">
      <div className="site-shell">
        <div className="site-shell-inner">
          <div className="overflow-hidden rounded-[28px] bg-white shadow-[0_24px_70px_rgba(15,23,42,0.1)]">
            <div className="relative bg-white lg:grid lg:min-h-[520px] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-0 xl:min-h-[580px]">
              <div className="relative z-20 overflow-visible bg-white px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 lg:px-10 lg:py-14 lg:pr-4 xl:px-12 xl:py-16 xl:pr-5">
                <div
                  aria-hidden
                  className="pointer-events-none absolute right-8 top-10 hidden h-44 w-44 rounded-full border border-[#e2e8f0] lg:block"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute bottom-16 right-20 hidden h-64 w-64 rounded-full border border-[#e2e8f0]/70 lg:block"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute right-32 top-1/2 hidden h-24 w-24 -translate-y-1/2 rounded-full bg-[#d4af37]/8 lg:block"
                />

                <p className="relative mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d4af37] sm:text-xs">
                  Professional · Trustworthy · Reliable
                </p>
                <h1 className="relative max-w-[32rem] text-[1.85rem] font-bold leading-[1.1] text-[#0f172a] sm:text-[2.2rem] md:text-[2.45rem] lg:max-w-[30rem] lg:text-[2.75rem] xl:max-w-[32rem]">
                  Professional Fractional CFO, accounting and{" "}
                  <span className="text-[#d4af37]">audit support services</span> tailored to your
                  business needs.
                </h1>
                <p className="relative mt-5 max-w-xl text-base leading-8 text-[#5b6678] sm:text-lg">
                  We provide accurate, reliable and result-driven financial solutions to help your
                  business grow with confidence.
                </p>
                <div className="relative mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link href={PRIMARY_CTA_HREF}>
                    <Button
                      size="lg"
                      className="h-12 w-full rounded-full px-7 text-sm font-semibold shadow-[0_16px_30px_rgba(15,23,42,0.16)] sm:h-[52px] sm:w-auto sm:text-base"
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
                      className="h-12 w-full rounded-full border-[#cbd5e1] bg-white px-7 text-sm font-semibold hover:bg-[#f8fafc] sm:h-[52px] sm:w-auto sm:text-base"
                      style={{ color: "#0F172A" }}
                    >
                      {SECONDARY_CTA_LABEL}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="relative h-[300px] sm:h-[380px] lg:-ml-28 lg:h-auto lg:min-h-[520px] lg:z-10 xl:-ml-36 2xl:-ml-44">
                <Image
                  src="/hero-finance-workspace.png"
                  alt="Professional finance workspace with accounting reports and analytics dashboard"
                  fill
                  priority
                  sizes="(max-width: 1023px) 100vw, 58vw"
                  className="object-cover object-[48%_center]"
                />
              </div>

              <svg
                aria-hidden
                viewBox="0 0 220 600"
                preserveAspectRatio="none"
                className="pointer-events-none absolute inset-y-0 left-[44.5%] z-30 hidden h-full w-[220px] lg:block xl:left-[44%] xl:w-[235px]"
              >
                <path d="M0,0 L0,600 L88,600 C16,505 16,95 88,0 Z" fill="white" />
                <path
                  d="M88,0 C16,95 16,505 88,600"
                  fill="none"
                  stroke="#d4af37"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="relative z-30 px-4 pb-4 sm:px-6 sm:pb-6 lg:px-8 lg:pb-8">
              <div className="space-y-4 xl:-mt-6">
                <div className="grid gap-4 rounded-[22px] border border-[#e8ecf2] bg-white p-4 shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:grid-cols-2 sm:p-5 xl:grid-cols-4 xl:p-6">
                  {heroHighlights.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.id}
                        className={`flex items-start gap-3 ${index < heroHighlights.length - 1 ? "xl:border-r xl:border-[#e8ecf2] xl:pr-5" : ""}`}
                      >
                        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#fff8e1]">
                          <Icon className="h-5 w-5 text-[#0f172a]" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-[#0f172a] sm:text-base">
                            {item.title}
                          </div>
                          <div className="mt-0.5 text-xs text-[#64748b] sm:text-sm">
                            {item.description}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="grid gap-5 rounded-[22px] bg-[#0f172a] px-5 py-6 text-[#f8fafc] shadow-[0_24px_60px_rgba(15,23,42,0.18)] sm:grid-cols-3 sm:px-8 sm:py-7">
                  {homeStats.map((stat, index) => {
                    const Icon = statIcons[index] ?? Award;
                    return (
                      <div
                        key={stat.id}
                        className={`flex items-center gap-4 ${index < homeStats.length - 1 ? "sm:border-r sm:border-white/12 sm:pr-6" : ""}`}
                      >
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/8">
                          <Icon className="h-5 w-5 text-[#d4af37]" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-[#d4af37] sm:text-3xl">
                            {stat.value}
                          </div>
                          <div className="text-sm font-semibold text-white sm:text-base">
                            {stat.title}
                          </div>
                          <div className="mt-0.5 text-xs text-white/70 sm:text-sm">
                            {stat.subtitle}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
