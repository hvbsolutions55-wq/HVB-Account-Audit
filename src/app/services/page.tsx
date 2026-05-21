import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  PieChart,
  ShieldCheck,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { services } from "@/data/services";
import { PRIMARY_CTA_HREF, PRIMARY_CTA_LABEL } from "@/lib/cta";

const serviceIcons: Record<string, LucideIcon> = {
  ShieldCheck,
  TrendingUp,
  PieChart,
  Briefcase,
};

const serviceAnchors = ["audit", "tax", "financial", "business"];

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.14),_transparent_20%),linear-gradient(135deg,_rgba(15,23,42,0.06),_white_40%,_rgba(248,250,252,0.96)_100%)] section-space-tight">
          <div className="site-shell">
            <div className="site-shell-inner">
              <div className="max-w-2xl">
                <div className="mb-4 inline-flex items-center rounded-full border border-[#d4af37]/35 bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#b88b16] backdrop-blur">
                  Tailored Financial Services
                </div>
                <h1 className="mb-4 text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl xl:text-[2.8rem]">
                  Our Services
                </h1>
                <p className="max-w-xl text-base leading-7 text-[#5b6678] xl:text-lg">
                  Comprehensive financial services designed to help your business
                  thrive, from audit and tax consulting to strategic financial
                  advisory.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-space bg-[#f8fafc]">
          <div className="site-shell">
            <div className="site-shell-inner">
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
                {services.map((service, index) => {
                  const Icon = serviceIcons[service.icon];
                  const sectionId = serviceAnchors[index] ?? service.id.toString();

                  return (
                    <div key={service.id} id={sectionId} className="scroll-mt-24">
                      <Card className="surface-card group relative flex h-full flex-col overflow-hidden border-[#d9e0ea] bg-[linear-gradient(180deg,_#ffffff_0%,_#fbfdff_100%)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(15,23,42,0.12)]">
                        <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-gradient-to-bl from-[#d4af37]/14 to-transparent" />
                        <CardHeader className="px-6 pb-5 pt-6 sm:px-8 sm:pt-8">
                          <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0f172a] text-[#d4af37] shadow-[0_18px_34px_rgba(15,23,42,0.16)]">
                            <Icon className="h-7 w-7" />
                          </div>
                          <CardTitle className="text-2xl tracking-tight text-[#0f172a]">
                            {service.title}
                          </CardTitle>
                          <CardDescription className="max-w-xl pt-1 text-base leading-7 text-[#5b6678]">
                            {service.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-1 flex-col px-6 pb-6 sm:px-8 sm:pb-8">
                          <ul className="space-y-3">
                            {service.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-sm leading-6 text-[#4b5563] sm:text-[15px]">
                                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#d4af37]" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="mt-6 border-t border-[#e5ebf2] pt-5">
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                              <div>
                                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[#64748b]">
                                  Starting from
                                </div>
                                <div className="mt-2 text-2xl font-bold text-[#0f172a]">
                                  {service.price}
                                </div>
                              </div>
                              <Link href={PRIMARY_CTA_HREF}>
                                <Button
                                  variant="outline"
                                  className="h-11 w-full rounded-xl border-[#cfd8e3] px-5 text-sm font-semibold text-[#0f172a] transition-colors hover:border-[#0f172a] hover:bg-[#0f172a] hover:text-white sm:w-auto"
                                >
                                  {PRIMARY_CTA_LABEL}
                                  <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="section-space-tight bg-white">
          <div className="site-shell">
            <div className="site-shell-inner">
              <Card className="overflow-hidden rounded-[30px] border-0 bg-gradient-to-r from-[#0f172a] via-[#111c34] to-[#1e293b] text-white shadow-[0_26px_60px_rgba(15,23,42,0.18)]">
                <CardContent className="px-6 py-10 text-center sm:px-8 lg:px-12 lg:py-12">
                  <div className="mb-3 inline-flex items-center rounded-full border border-white/12 bg-white/8 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#d4af37]">
                    Custom Engagements
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Need a Custom Solution?
                  </h2>
                  <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
                    We tailor our services to your reporting requirements, growth
                    stage, and internal finance needs. Let&apos;s discuss the right
                    structure for your business.
                  </p>
                  <Link href={PRIMARY_CTA_HREF}>
                    <Button
                      size="lg"
                      className="mt-8 h-12 rounded-xl px-6 text-sm font-semibold sm:px-7 sm:text-base"
                      style={{ backgroundColor: "#D4AF37", color: "#0F172A" }}
                    >
                      {PRIMARY_CTA_LABEL}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
