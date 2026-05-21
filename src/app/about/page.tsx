import Link from "next/link";
import {
  ArrowRight,
  Award,
  Users,
  Target,
  Zap,
  GraduationCap,
  ShieldCheck,
  Globe2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { stats } from "@/data/testimonials";
import { PRIMARY_CTA_HREF, PRIMARY_CTA_LABEL } from "@/lib/cta";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description:
      "We hold every engagement to a high technical standard and deliver work that is accurate, timely, and defensible.",
  },
  {
    icon: Users,
    title: "Integrity",
    description:
      "Our client relationships are built on direct communication, transparent recommendations, and dependable execution.",
  },
  {
    icon: Target,
    title: "Focus",
    description:
      "We shape our support around your growth stage, reporting obligations, and operational priorities.",
  },
  {
    icon: Zap,
    title: "Efficiency",
    description:
      "Modern workflows and disciplined processes let us move quickly without lowering quality.",
  },
];

const leadership = [
  {
    name: "David Harrison",
    role: "Managing Director",
    initials: "DH",
    credentials: "FCA, FCCA",
  },
  {
    name: "Sarah Mitchell",
    role: "Audit Director",
    initials: "SM",
    credentials: "FCA",
  },
  {
    name: "James Thompson",
    role: "Tax Partner",
    initials: "JT",
    credentials: "CTA, ACA",
  },
  {
    name: "Emily Chen",
    role: "Advisory Director",
    initials: "EC",
    credentials: "MBA, CMA",
  },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.14),_transparent_20%),linear-gradient(135deg,_rgba(15,23,42,0.06),_white_40%,_rgba(248,250,252,0.96)_100%)] section-space-tight">
          <div className="site-shell">
            <div className="site-shell-inner">
              <div className="max-w-2xl">
                <div className="mb-4 inline-flex items-center rounded-full border border-[#d4af37]/35 bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#b88b16] backdrop-blur">
                  Professional Firm Profile
                </div>
                <h1 className="mb-4 text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl xl:text-[2.8rem]">
                  About HVB Solutions
                </h1>
                <p className="max-w-xl text-base leading-7 text-[#5b6678] xl:text-lg">
                  Professional accounting and auditing services built on trust,
                  expertise, and a commitment to measurable financial outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-space-compact bg-white">
          <div className="site-shell">
            <div className="site-shell-inner">
              <Card className="overflow-hidden rounded-[30px] border-0 bg-[#0f172a] text-white shadow-[0_24px_60px_rgba(15,23,42,0.18)]">
                <CardContent className="grid gap-6 px-6 py-8 sm:grid-cols-2 lg:grid-cols-4 sm:px-8 lg:px-10">
                  {stats.map((stat, index) => (
                    <div
                      key={stat.id}
                      className={`${index < stats.length - 1 ? "lg:border-r lg:border-white/10 lg:pr-6" : ""}`}
                    >
                      <div className="text-3xl font-bold text-[#d4af37] sm:text-4xl">
                        {stat.value}
                      </div>
                      <div className="mt-2 text-sm font-semibold uppercase tracking-[0.14em] text-white/70">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="section-space bg-[#f8fafc]">
          <div className="site-shell">
            <div className="site-shell-inner grid gap-8 xl:grid-cols-[1.15fr_0.85fr] xl:gap-10">
              <Card className="surface-card border-[#d9e0ea] bg-white">
                <CardHeader className="px-6 pt-6 sm:px-8 sm:pt-8">
                  <div className="mb-3 inline-flex w-fit items-center rounded-full bg-[#f8fafc] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#64748b]">
                    Our Story
                  </div>
                  <CardTitle className="text-3xl tracking-tight text-[#0f172a]">
                    Built for financial clarity and long-term trust
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-5 px-6 pb-6 text-base leading-8 text-[#5b6678] sm:px-8 sm:pb-8">
                  <p>
                    HVB Solutions was founded to give growing businesses access to
                    the kind of financial oversight, reporting discipline, and
                    technical judgement typically reserved for much larger firms.
                  </p>
                  <p>
                    Over the last 5+ years, we have supported clients across
                    technology, manufacturing, healthcare, retail, and professional
                    services with audit, tax, advisory, and finance operations
                    support.
                  </p>
                  <p>
                    Our model is practical: accurate work, responsive communication,
                    and advice that fits the commercial reality of the business in
                    front of us.
                  </p>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card className="surface-card border-[#d9e0ea] bg-[linear-gradient(180deg,_#ffffff_0%,_#fbfdff_100%)]">
                  <CardContent className="px-6 py-6 sm:px-8 sm:py-8">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0f172a] text-[#d4af37]">
                        <ShieldCheck className="h-6 w-6" />
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold text-[#0f172a]">
                          Why clients stay with us
                        </h2>
                        <ul className="mt-4 space-y-3 text-sm leading-7 text-[#5b6678] sm:text-[15px]">
                          <li>Accurate reporting with clear audit trails</li>
                          <li>Commercial advice aligned to business goals</li>
                          <li>Reliable delivery across recurring finance work</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="surface-card border-[#d9e0ea] bg-[#0f172a] text-white">
                  <CardContent className="px-6 py-6 sm:px-8 sm:py-8">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/8 text-[#d4af37]">
                        <Globe2 className="h-6 w-6" />
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold">
                          Serving UK and international clients
                        </h2>
                        <p className="mt-3 text-sm leading-7 text-white/72 sm:text-[15px]">
                          We work with founders, finance leads, and established
                          businesses that need dependable accounting, audit, and
                          advisory support without unnecessary complexity.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="section-space bg-white">
          <div className="site-shell">
            <div className="site-shell-inner">
              <div className="mb-12 max-w-2xl">
                <div className="mb-4 inline-flex items-center rounded-full bg-[#f8fafc] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#64748b]">
                  Core Principles
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
                  The standards behind our work
                </h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {values.map((value) => (
                  <Card
                    key={value.title}
                    className="surface-card border-[#e2e8f0] bg-[linear-gradient(180deg,_#ffffff_0%,_#fbfdff_100%)] transition-transform duration-300 hover:-translate-y-1"
                  >
                    <CardHeader>
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#fff8e1] text-[#0f172a]">
                        <value.icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl text-[#0f172a]">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-7 text-[#5b6678]">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-space bg-[#f8fafc]">
          <div className="site-shell">
            <div className="site-shell-inner">
              <div className="mb-12 max-w-2xl">
                <div className="mb-4 inline-flex items-center rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#64748b] shadow-sm">
                  Leadership Team
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
                  Experienced professionals leading every engagement
                </h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {leadership.map((member) => (
                  <Card key={member.name} className="surface-card border-[#d9e0ea] bg-white">
                    <CardHeader className="items-center text-center">
                      <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-2xl font-bold text-[#d4af37] shadow-[0_16px_30px_rgba(15,23,42,0.18)]">
                        {member.initials}
                      </div>
                      <CardTitle className="text-lg text-[#0f172a]">{member.name}</CardTitle>
                      <p className="text-sm font-medium text-[#b88b16]">{member.role}</p>
                      <p className="text-xs text-[#64748b]">{member.credentials}</p>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-space-compact bg-white">
          <div className="site-shell">
            <div className="site-shell-inner">
              <Card className="surface-card border-[#d9e0ea] bg-[linear-gradient(180deg,_#ffffff_0%,_#fbfdff_100%)]">
                <CardContent className="px-6 py-6 sm:px-8 sm:py-8">
                  <div className="mb-5 text-center">
                    <div className="mb-3 inline-flex items-center rounded-full bg-[#f8fafc] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#64748b]">
                      Professional Credentials
                    </div>
                    <h2 className="text-2xl font-bold text-[#0f172a]">
                      Recognised by leading professional bodies
                    </h2>
                  </div>
                  <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
                    {["ACCA", "ICAEW", "CIMA", "CTA", "ICAS"].map((cert) => (
                      <div
                        key={cert}
                        className="inline-flex items-center gap-2 rounded-full border border-[#e2e8f0] bg-white px-4 py-2 text-sm font-semibold text-[#0f172a] shadow-sm"
                      >
                        <GraduationCap className="h-4 w-4 text-[#b88b16]" />
                        {cert}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="section-space-tight bg-white">
          <div className="site-shell">
            <div className="site-shell-inner">
              <Card className="overflow-hidden rounded-[30px] border-0 bg-gradient-to-r from-[#0f172a] via-[#111c34] to-[#1e293b] text-white shadow-[0_26px_60px_rgba(15,23,42,0.18)]">
                <CardContent className="px-6 py-10 text-center sm:px-8 lg:px-12 lg:py-12">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Ready to work with a more dependable finance partner?
                  </h2>
                  <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
                    Let&apos;s discuss how we can support your accounting, audit,
                    and finance priorities with a structure that fits your team.
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
