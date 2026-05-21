import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  PieChart,
  Briefcase,
  Star,
  CalendarDays,
  PhoneCall,
  BadgeCheck,
  Target,
  Users,
  LockKeyhole,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import {
  PRIMARY_CTA_HREF,
  PRIMARY_CTA_LABEL,
  SECONDARY_CTA_HREF,
  SECONDARY_CTA_LABEL,
} from "@/lib/cta";

const serviceIcons = {
  ShieldCheck,
  TrendingUp,
  PieChart,
  Briefcase,
};

const heroHighlights = [
  {
    id: 1,
    title: "Certified Professionals",
    description: "Experienced & Qualified",
    icon: BadgeCheck,
  },
  {
    id: 2,
    title: "Accurate & Timely Reporting",
    description: "You Can Rely On",
    icon: Target,
  },
  {
    id: 3,
    title: "Tailored Business Solutions",
    description: "Built Around You",
    icon: Users,
  },
  {
    id: 4,
    title: "Confidential & Reliable Service",
    description: "Your Data is Safe",
    icon: LockKeyhole,
  },
];

const heroStats = [
  {
    id: 1,
    value: "10+",
    title: "Years of Experience",
    subtitle: "Delivering Excellence",
    icon: ShieldCheck,
  },
  {
    id: 2,
    value: "250+",
    title: "Satisfied Clients",
    subtitle: "Across Various Industries",
    icon: Users,
  },
  {
    id: 3,
    value: "500+",
    title: "Projects Completed",
    subtitle: "Successfully Delivered",
    icon: Briefcase,
  },
];

const serviceLinks = [
  "/services#audit",
  "/services#tax",
  "/services#financial",
  "/services#business",
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="section-space-compact overflow-hidden bg-[#f8fafc]">
          <div className="site-shell">
            <div className="site-shell-inner">
            <div className="surface-card overflow-hidden shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
              <div className="grid xl:grid-cols-[1.12fr_0.88fr]">
                <div className="relative px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 lg:px-12 lg:py-14 xl:px-14 xl:py-16">
                  <div className="absolute -left-10 bottom-12 hidden h-44 w-44 rounded-full bg-[#f1f5f9] blur-2xl lg:block" />
                  <div className="absolute left-6 top-6 hidden h-16 w-16 rounded-full bg-[#f8fafc] sm:block" />
                  <div className="relative z-10 max-w-[44rem]">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#d4af37] sm:text-sm lg:text-base">
                      Professional. Trustworthy. Reliable.
                    </p>
                    <h1 className="text-[1.95rem] font-bold leading-[1.02] text-[#0f172a] sm:text-[2.35rem] md:text-[2.7rem] lg:text-[3rem] xl:text-[3.3rem] 2xl:text-[3.5rem]">
                      <span className="block">Global Professional</span>
                      <span className="mt-1 block text-[#d4af37]">Accounting, Finance</span>
                      <span className="mt-1 block">&amp; Audit Services</span>
                    </h1>
                    <p className="mt-5 max-w-2xl text-base leading-8 text-[#475569] sm:mt-6 sm:text-lg lg:text-xl">
                      Fractional CFO, Audit and Accounting Support Designed to Help
                      You Achieve Your Financial Goals
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
                      <a href={SECONDARY_CTA_HREF}>
                        <Button
                          size="lg"
                          variant="outline"
                          className="h-12 w-full rounded-xl border-[#cbd5e1] bg-white px-6 text-sm font-semibold hover:bg-[#f8fafc] sm:h-14 sm:w-auto sm:px-7 sm:text-base"
                          style={{ color: "#0F172A" }}
                        >
                          <PhoneCall className="mr-2 h-5 w-5" />
                          {SECONDARY_CTA_LABEL}
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="relative min-h-[320px] overflow-hidden sm:min-h-[420px] lg:min-h-[520px] xl:min-h-[640px]">
                  <Image
                    src="/hero-accounting.jpg"
                    alt="Accounting and finance workspace"
                    fill
                    priority
                    sizes="(max-width: 1279px) 100vw, 44vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/8 to-white/18" />
                  <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-white via-white/70 to-transparent sm:w-16 lg:w-24 xl:w-32" />
                  <div className="absolute -left-10 -top-14 h-36 w-36 rotate-[24deg] rounded-[999px] bg-[#d4af37] sm:h-44 sm:w-44 lg:h-48 lg:w-48 xl:h-56 xl:w-56" />
                  <div className="absolute bottom-5 right-4 max-w-[240px] rounded-[22px] border border-white/30 bg-[#0f172a]/94 px-4 py-4 text-[#f8fafc] shadow-[0_18px_45px_rgba(15,23,42,0.3)] backdrop-blur sm:bottom-6 sm:right-6 sm:max-w-[280px] sm:px-5 lg:bottom-8 lg:right-8 lg:px-7">
                    <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[#d4af37] sm:text-sm">
                      HVB Solutions
                    </div>
                    <div className="mt-2 text-lg font-bold sm:text-xl lg:text-2xl">Accounts &amp; Audit</div>
                    <div className="mt-1 text-xs text-white/75 sm:text-sm">
                      Professional services built on accuracy and trust.
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
                          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#fff8e1] text-[#0f172a]">
                            <Icon className="h-6 w-6" style={{ color: "#0F172A" }} />
                          </div>
                          <div>
                            <div className="text-base font-semibold leading-6 text-[#0f172a]">
                              {item.title}
                            </div>
                            <div className="mt-1 text-sm text-[#64748b]">
                              {item.description}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="grid gap-4 rounded-[22px] bg-[#0f172a] px-5 py-5 text-[#f8fafc] shadow-[0_24px_60px_rgba(15,23,42,0.18)] md:grid-cols-3 md:px-6 md:py-6 lg:px-8 lg:py-8">
                    {heroStats.map((stat, index) => {
                      const Icon = stat.icon;
                      return (
                        <div
                          key={stat.id}
                          className={`flex items-start gap-4 ${index < heroStats.length - 1 ? "md:border-r md:border-white/12 md:pr-4 lg:pr-6" : ""}`}
                        >
                          <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-[#1e293b] text-[#d4af37]">
                            <Icon className="h-7 w-7" style={{ color: "#D4AF37" }} />
                          </div>
                          <div>
                            <div className="text-3xl font-bold leading-none text-[#d4af37] lg:text-4xl">
                              {stat.value}
                            </div>
                            <div className="mt-2 text-lg font-semibold text-white lg:text-xl">
                              {stat.title}
                            </div>
                            <div className="mt-1 text-sm text-white/72 lg:text-base">
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

        {/* Services Section */}
        <section className="section-space bg-white">
          <div className="site-shell">
            <div className="site-shell-inner">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block mb-4">
                <div className="flex items-center justify-center gap-2 text-navy-800">
                  <div className="w-8 sm:w-12 h-0.5 bg-navy-800"></div>
                  <span className="font-semibold text-xs sm:text-sm uppercase tracking-wider">Our Expertise</span>
                  <div className="w-8 sm:w-12 h-0.5 bg-navy-800"></div>
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 mb-4">Comprehensive Financial Services</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                From audit and tax to strategic advisory, we provide end-to-end solutions
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {services.map((service, index) => {
                const Icon = serviceIcons[service.icon as keyof typeof serviceIcons];
                return (
                  <Link key={service.id} href={serviceLinks[index] ?? "/services"} className="group">
                    <Card className="h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-0 bg-gradient-to-br from-white to-navy-50">
                      <CardHeader className="text-center pb-4">
                        <div className="mx-auto mb-4 h-14 sm:h-16 w-14 sm:w-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg" style={{ background: '#0F172A', color: '#FFFFFF' }}>
                          <Icon className="h-7 sm:h-8 w-7 sm:w-8" />
                        </div>
                        <CardTitle className="text-lg sm:text-xl text-navy-900 group-hover:text-navy-800 transition-colors">
                          {service.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm sm:text-base text-gray-600 text-center mb-4">{service.description}</p>
                        <div className="text-center">
                          <span className="inline-flex items-center text-navy-800 font-medium group-hover:translate-x-2 transition-transform">
                            Learn More <ArrowRight className="ml-2 h-4 w-4" style={{ color: 'oklch(0.22 0.09 260)' }} />
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

        {/* Testimonials Section */}
        <section className="section-space bg-gradient-to-br from-navy-50 to-white">
          <div className="site-shell">
            <div className="site-shell-inner">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-block mb-4">
                <div className="flex items-center justify-center gap-2 text-navy-800">
                  <div className="w-8 sm:w-12 h-0.5 bg-navy-800"></div>
                  <span className="font-semibold text-xs sm:text-sm uppercase tracking-wider">Testimonials</span>
                  <div className="w-8 sm:w-12 h-0.5 bg-navy-800"></div>
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900 mb-4">What Our Clients Say</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Trusted by businesses across various industries
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="bg-white hover:shadow-xl transition-shadow border-0">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center gap-1 mb-4" style={{ color: '#0F172A' }}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4" style={{ fill: '#0F172A', color: '#0F172A' }} />
                      ))}
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 italic line-clamp-3">{testimonial.content}</p>
                    <div className="flex items-center gap-3">
                      <div className="h-10 sm:h-12 w-10 sm:w-12 rounded-full bg-gradient-to-br from-navy-800 to-navy-900 flex items-center justify-center font-semibold text-white">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <div className="font-semibold text-navy-900 text-sm">{testimonial.name}</div>
                        <div className="text-xs sm:text-sm text-gray-500">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-space bg-gradient-to-r from-navy-800 via-navy-900 to-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            {/* Background Pattern */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
            <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl"></div>
          </div>
          <div className="site-shell">
            <div className="site-shell-inner relative z-20 flex flex-col items-center text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Finances?</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-8 sm:mb-10">
              Schedule a free consultation with our experts and discover how we can help your business grow
            </p>
            <Link href={PRIMARY_CTA_HREF}>
              <Button size="lg" className="hover:opacity-90 px-6 sm:px-10 py-5 sm:py-6 text-base sm:text-lg font-semibold rounded-full shadow-xl border-2 flex items-center gap-2" style={{ backgroundColor: '#D4AF37', color: '#0F172A', borderColor: '#D4AF37' }}>
                {PRIMARY_CTA_LABEL} <ArrowRight className="h-4 w-4" style={{ color: '#0F172A' }} />
              </Button>
            </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
