import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageShell } from "@/components/page-shell";
import { PRIMARY_CTA_HREF, PRIMARY_CTA_LABEL } from "@/lib/cta";

export const metadata: Metadata = {
  title: "Careers | HVB Solutions",
  description:
    "Join HVB Solutions — outsourced finance, accounting, and audit support roles.",
};

export default function CareersPage() {
  return (
    <PageShell>
      <section className="section-space-tight bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.14),_transparent_20%),linear-gradient(135deg,_rgba(15,23,42,0.06),_white_40%,_rgba(248,250,252,0.96)_100%)]">
        <div className="site-shell">
          <div className="site-shell-inner max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/35 bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#b88b16]">
              <Briefcase className="h-3.5 w-3.5" />
              Careers
            </div>
            <h1 className="mb-4 text-3xl font-bold text-[#0f172a] sm:text-4xl">Work With HVB Solutions</h1>
            <p className="text-base leading-7 text-[#5b6678]">
              We are building a team of finance, accounting, and audit professionals who deliver
              high-quality outsourced support to clients worldwide.
            </p>
          </div>
        </div>
      </section>

      <section className="section-space bg-[#f8fafc]">
        <div className="site-shell">
          <div className="site-shell-inner max-w-3xl">
            <Card className="surface-card border-[#d9e0ea] bg-white">
              <CardContent className="space-y-5 px-6 py-8 text-base leading-8 text-[#5b6678] sm:px-8">
                <p>
                  Open positions will be posted here as they become available. If you are
                  interested in joining our virtual delivery team, please send your CV and area
                  of expertise through our contact form.
                </p>
                <p className="text-sm text-[#64748b]">
                  Once the website is live, job listings can be added through the site admin
                  (blog/CMS workflow) — we can provide a short guide for posting roles when you
                  are ready.
                </p>
                <Link href={PRIMARY_CTA_HREF}>
                  <Button
                    className="rounded-xl font-semibold"
                    style={{ backgroundColor: "#0F172A", color: "#F8FAFC" }}
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
