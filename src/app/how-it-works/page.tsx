import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageShell } from "@/components/page-shell";
import { processSteps, processIntro } from "@/data/how-it-works";
import { PRIMARY_CTA_HREF, PRIMARY_CTA_LABEL } from "@/lib/cta";

export const metadata: Metadata = {
  title: "How It Works | HVB Solutions",
  description:
    "Discovery & consultation, expert matching, and seamless engagement — how HVB Solutions delivers outsourced finance support.",
};

export default function HowItWorksPage() {
  return (
    <PageShell>
      <section className="section-space-tight bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.14),_transparent_20%),linear-gradient(135deg,_rgba(15,23,42,0.06),_white_40%,_rgba(248,250,252,0.96)_100%)]">
        <div className="site-shell">
          <div className="site-shell-inner max-w-3xl">
            <h1 className="mb-4 text-3xl font-bold text-[#0f172a] sm:text-4xl">
              How HVB Solutions Work
            </h1>
            <p className="text-base leading-7 text-[#5b6678] xl:text-lg">{processIntro}</p>
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="site-shell">
          <div className="site-shell-inner max-w-4xl space-y-8">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <Card key={step.id} className="surface-card border-[#d9e0ea]">
                  <CardContent className="flex flex-col gap-5 px-6 py-8 sm:flex-row sm:items-start sm:px-8">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0f172a] text-xl font-bold text-[#d4af37]">
                      {step.id}
                    </div>
                    <div>
                      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff8e1]">
                        <Icon className="h-5 w-5 text-[#0f172a]" />
                      </div>
                      <h2 className="text-2xl font-semibold text-[#0f172a]">{step.title}</h2>
                      <p className="mt-3 text-base leading-8 text-[#5b6678]">{step.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space-tight bg-[#f8fafc]">
        <div className="site-shell">
          <div className="site-shell-inner text-center">
            <Link href={PRIMARY_CTA_HREF}>
              <Button
                size="lg"
                className="rounded-xl font-semibold"
                style={{ backgroundColor: "#D4AF37", color: "#0F172A" }}
              >
                {PRIMARY_CTA_LABEL}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
