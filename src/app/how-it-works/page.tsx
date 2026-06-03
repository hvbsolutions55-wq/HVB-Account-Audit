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
    "Discovery & consultation, expert matching, and seamless engagement — how HVB Solutions delivers outsourced finance support.",
};

export default function HowItWorksPage() {
  return (
    <PageShell>
      <section className="section-space bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.14),_transparent_22%),linear-gradient(135deg,_rgba(15,23,42,0.05),_white_45%,_rgba(248,250,252,0.98)_100%)]">
        <div className="site-shell">
          <div className="site-shell-inner">
            <HowItWorksProcess />
          </div>
        </div>
      </section>

      <section className="section-space-tight border-t border-[#e8edf3] bg-[#0f172a] text-white">
        <div className="site-shell">
          <div className="site-shell-inner text-center">
            <p className="mb-6 text-base text-white/80">
              Ready to get started? Book a free consultation with our team.
            </p>
            <Link href={PRIMARY_CTA_HREF}>
              <Button
                size="lg"
                className="rounded-xl font-semibold shadow-[0_16px_30px_rgba(0,0,0,0.2)]"
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
