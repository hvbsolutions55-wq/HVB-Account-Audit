import {
  Briefcase,
  Building2,
  Calculator,
  CheckCircle2,
  ClipboardList,
  LineChart,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PageShell } from "@/components/page-shell";
import { services } from "@/data/services";
import { SERVICES_INTRO } from "@/lib/site";

const serviceIcons: Record<string, LucideIcon> = {
  LineChart,
  ClipboardList,
  Calculator,
  Building2,
  ShieldCheck,
  Briefcase,
};

export default function ServicesPage() {
  return (
    <PageShell>
      <section className="bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.14),_transparent_20%),linear-gradient(135deg,_rgba(15,23,42,0.06),_white_40%,_rgba(248,250,252,0.96)_100%)] section-space-tight">
        <div className="site-shell">
          <div className="site-shell-inner">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center rounded-full border border-[#d4af37]/35 bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#b88b16]">
                Tailored Financial Services
              </div>
              <h1 className="mb-4 text-3xl font-bold uppercase tracking-tight text-[#0f172a] sm:text-4xl">
                Our Services
              </h1>
              <p className="text-base leading-7 text-[#5b6678] xl:text-lg">{SERVICES_INTRO}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-[#f8fafc]">
        <div className="site-shell">
          <div className="site-shell-inner space-y-10">
            {services.map((service) => {
              const Icon = serviceIcons[service.icon] ?? Briefcase;

              return (
                <div key={service.id} id={service.slug} className="scroll-mt-28">
                  <Card className="surface-card overflow-hidden border-[#d9e0ea] bg-white">
                    <CardHeader className="px-6 pb-4 pt-6 sm:px-8 sm:pt-8">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0f172a] text-[#d4af37]">
                          <Icon className="h-7 w-7" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl uppercase tracking-wide text-[#0f172a] sm:text-3xl">
                            {service.title}
                          </CardTitle>
                          <CardDescription className="mt-2 max-w-3xl text-base leading-7">
                            {service.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="px-6 pb-6 sm:px-8 sm:pb-8">
                      <ul className="grid gap-3 sm:grid-cols-2">
                        {service.details.map((detail) => (
                          <li
                            key={detail}
                            className="flex items-start gap-3 text-sm leading-6 text-[#4b5563] sm:text-[15px]"
                          >
                            <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#d4af37]" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
