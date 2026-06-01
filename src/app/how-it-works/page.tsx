import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/page-shell";
import { HowItWorksProcess } from "@/components/how-it-works-process";
import { PRIMARY_CTA_HREF, PRIMARY_CTA_LABEL } from "@/lib/cta";

export const metadata: Metadata = {
  title: "How It Works | HVB Solutions",
  description:
    "Consult, match, and engage — how HVB Solutions delivers outsourced CFO, accounting, and audit support as an extension of your team.",
};

export default function HowItWorksPage() {
  return (
    <PageShell>
      <section className="section-space bg-white">
        <div className="site-shell">
          <div className="site-shell-inner">
            <HowItWorksProcess />
          </div>
        </div>
      </section>

      <section className="section-space-tight border-t border-[#e8edf3] bg-[#f8fafc]">
        <div className="site-shell">
          <div className="site-shell-inner text-center">
            <p className="mb-6 text-base text-[#5b6678]">
              Ready to get started? Book a free consultation with our team.
            </p>
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
