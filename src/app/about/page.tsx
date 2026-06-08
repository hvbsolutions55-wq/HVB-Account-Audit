import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Users, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageShell } from "@/components/page-shell";
import { stats } from "@/data/testimonials";
import { founderExtraParagraph } from "@/data/site-content";
import { PRIMARY_CTA_HREF, PRIMARY_CTA_LABEL } from "@/lib/cta";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description:
      "We strive for the highest standards in every engagement, delivering quality that exceeds expectations.",
  },
  {
    icon: Users,
    title: "Integrity",
    description:
      "Honest and transparent in all our dealings, building lasting relationships based on trust.",
  },
  {
    icon: Target,
    title: "Focus",
    description:
      "Client-centric approach ensuring your specific needs and goals remain our priority.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "Embracing technology and modern methodologies to deliver efficient, effective solutions.",
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <section className="section-space-tight bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.14),_transparent_20%),linear-gradient(135deg,_rgba(15,23,42,0.06),_white_40%,_rgba(248,250,252,0.96)_100%)]">
        <div className="site-shell">
          <div className="site-shell-inner">
            <div className="max-w-3xl">
              <h1 className="mb-4 text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl xl:text-[2.8rem]">
                About HVB Solutions
              </h1>
              <p className="text-base leading-7 text-[#5b6678] xl:text-lg">
                We partner with businesses to provide strategic financial leadership,
                accounting expertise, corporate advisory, and audit support services that drive
                sustainable growth and operational excellence.
              </p>
            </div>

            <Card className="mt-6 overflow-hidden rounded-[30px] border-0 bg-[#0f172a] text-white sm:mt-8">
              <CardContent className="px-6 py-8 sm:px-10 sm:py-10 lg:py-12">
                <div className="mx-auto flex w-full max-w-xl flex-col items-center justify-center gap-8 sm:max-w-2xl sm:flex-row sm:gap-0 lg:max-w-3xl">
                  {stats.map((stat, index) => (
                    <div
                      key={stat.id}
                      className={`flex flex-1 flex-col items-center text-center ${
                        index < stats.length - 1
                          ? "w-full border-b border-white/10 pb-8 sm:w-auto sm:border-b-0 sm:border-r sm:pb-0 sm:px-10 lg:px-16"
                          : "sm:px-10 lg:px-16"
                      }`}
                    >
                      <div className="text-3xl font-bold text-[#d4af37] sm:text-4xl lg:text-5xl">
                        {stat.value}
                      </div>
                      <div className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/70 sm:text-sm">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-space bg-[#f8fafc]">
        <div className="site-shell">
          <div className="site-shell-inner space-y-10">
            <Card className="surface-card border-[#d9e0ea] bg-white">
              <CardHeader className="px-6 pt-6 sm:px-8 sm:pt-8">
                <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#b88b16]">
                  You&apos;re In Good Company
                </p>
                <CardTitle className="text-3xl text-[#0f172a]">About HVB Solutions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5 px-6 pb-8 text-base leading-8 text-[#5b6678] sm:px-8">
                <p>
                  At HVB Solutions, we provide practical financial, accounting, advisory, and
                  audit support services that help businesses operate more efficiently and
                  achieve their strategic objectives. Our experienced professionals combine
                  technical expertise with a hands-on approach to deliver solutions that create
                  measurable value.
                </p>
                <p>
                  We work closely with business owners, management teams, and stakeholders to
                  identify financial challenges, strengthen internal processes, improve
                  reporting, and support informed decision-making. From day-to-day accounting
                  operations to executive-level financial leadership, we provide the expertise
                  businesses need to grow with confidence.
                </p>
                <p>
                  Guided by our commitment to excellence and client success, we deliver tailored
                  solutions across Fractional CFO services, Controller &amp; Accounting Advisory,
                  Financial Operations, Corporate Services, Audit Support, and Business Advisory
                  &amp; Tax Consulting.
                </p>
              </CardContent>
            </Card>

            <Card className="surface-card border-[#d9e0ea] bg-white">
              <CardHeader className="px-6 pt-6 sm:px-8">
                <CardTitle className="text-2xl text-[#0f172a]">Leave It To Our Team of Experts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-5 px-6 pb-8 text-base leading-8 text-[#5b6678] sm:px-8">
                <p>
                  Our complete outsource structure provides access to an entire team of
                  consultants at affordable costs. This means your needs will be met at the
                  lowest possible cost with the highest quality.
                </p>
                <p>
                  In this complicated economy, many growing or emerging companies are finding
                  the need for an experienced Chief Financial Officer and accounting team for
                  the first time. The burdensome cost of paying a full-time CFO and accounting
                  staff can be a significant barrier to success. Outsourcing to an experienced
                  team of professionals may be a more efficient and cost effective way to ensure
                  your continued growth than hiring in-house employees.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="site-shell">
          <div className="site-shell-inner">
            <h2 className="mb-8 text-3xl font-bold text-[#0f172a]">Our Values</h2>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {values.map((value) => (
                <Card key={value.title} className="surface-card border-[#e2e8f0]">
                  <CardHeader>
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#fff8e1]">
                      <value.icon className="h-6 w-6 text-[#0f172a]" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
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
            <div className="mb-10 max-w-2xl">
              <h2 className="text-3xl font-bold text-[#0f172a] sm:text-4xl">About the Founder</h2>
            </div>
            <Card className="surface-card overflow-hidden border-[#d9e0ea] bg-white">
              <CardContent className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[280px_1fr] lg:gap-10">
                <div className="relative mx-auto aspect-[4/5] w-full max-w-[280px] overflow-hidden rounded-[24px] bg-[#f1f5f9] lg:mx-0">
                  <Image
                    src="/founder-hamza.png"
                    alt="Hamza Sheikh, Founder and CEO of HVB Solutions"
                    fill
                    className="object-cover object-center"
                    sizes="280px"
                  />
                </div>
                <div className="space-y-5 text-base leading-8 text-[#5b6678]">
                  <div>
                    <h3 className="text-2xl font-bold text-[#0f172a]">Hamza Sheikh</h3>
                    <p className="mt-1 font-medium text-[#b88b16]">Founder &amp; CEO — HVB Solutions</p>
                  </div>
                  <p>
                    Hamza Sheikh is the Founder and Chief Executive Officer of HVB Solutions, a
                    professional virtual business solutions firm providing outsourced audit,
                    accounting, compliance, and corporate support services to clients across the
                    USA, UK, Europe, Australia, Canada, and the Middle East.
                  </p>
                  <p>
                    He is a qualified Chartered Accountant from the Institute of Chartered
                    Accountants of Pakistan and a graduate of Oxford Brookes University, United
                    Kingdom. He brings together strong academic credentials and extensive
                    professional experience in audit, accounting, advisory, and corporate
                    services.
                  </p>
                  <p>
                    Prior to founding HVB Solutions, Hamza Sheikh gained valuable experience
                    working with globally recognized firms including EY, PwC, and Grant Thornton.
                    Through these roles, he developed deep expertise in financial reporting,
                    external audit, risk assessment, compliance, internal controls, and business
                    advisory services.
                  </p>
                  <p>
                    Over the years, he has successfully served clients across a wide range of
                    industries including private equity, manufacturing, non-profit organizations,
                    power &amp; energy, real estate, healthcare, services sector, listed companies,
                    and public sector entities.
                  </p>
                  <p>{founderExtraParagraph}</p>
                  <p>
                    Under his leadership, HVB Solutions has grown into a trusted outsourcing
                    partner known for professionalism, confidentiality, accuracy, and timely
                    delivery.
                  </p>
                  <p>
                    Hamza Sheikh believes in building long-term client relationships through
                    integrity, technical excellence, and a commitment to delivering measurable
                    value through every engagement.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-space-tight bg-white">
        <div className="site-shell">
          <div className="site-shell-inner">
            <Card className="overflow-hidden rounded-[30px] border-0 bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white">
              <CardContent className="px-6 py-10 text-center sm:px-8 lg:py-12">
                <h2 className="text-3xl font-bold sm:text-4xl">
                  Ready to work with a trusted finance partner?
                </h2>
                <Link href={PRIMARY_CTA_HREF}>
                  <Button
                    size="lg"
                    className="mt-8 rounded-xl font-semibold"
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
    </PageShell>
  );
}
