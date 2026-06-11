import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JobCard } from "@/components/careers/job-card";
import { PageShell } from "@/components/page-shell";
import { getAllJobs } from "@/sanity/lib/api";
import { isSanityConfigured } from "@/sanity/env";
import { PRIMARY_CTA_HREF, PRIMARY_CTA_LABEL } from "@/lib/cta";

export const metadata: Metadata = {
  title: "Careers | HVB Solutions",
  description:
    "Join HVB Solutions — outsourced finance, accounting, and audit support roles.",
};

export const revalidate = 300;

export default async function CareersPage() {
  const jobs = await getAllJobs();

  return (
    <PageShell>
      <section className="section-space-tight bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.14),_transparent_20%),linear-gradient(135deg,_rgba(15,23,42,0.06),_white_40%,_rgba(248,250,252,0.96)_100%)]">
        <div className="site-shell">
          <div className="site-shell-inner max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/35 bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#b88b16]">
              <Briefcase className="h-3.5 w-3.5" />
              Careers
            </div>
            <h1 className="mb-4 text-3xl font-bold text-[#0f172a] sm:text-4xl">
              Work With HVB Solutions
            </h1>
            <p className="text-base leading-7 text-[#5b6678]">
              We are building a team of finance, accounting, and audit professionals who deliver
              high-quality outsourced support to clients worldwide.
            </p>
          </div>
        </div>
      </section>

      <section className="section-space bg-[#f8fafc]">
        <div className="site-shell">
          <div className="site-shell-inner">
            {!isSanityConfigured ? (
              <div className="surface-card mx-auto max-w-3xl border-[#d9e0ea] bg-white px-6 py-8 text-center sm:px-8">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0f172a] text-[#d4af37]">
                  <Briefcase className="h-7 w-7" />
                </div>
                <h2 className="mt-5 text-2xl font-bold text-[#0f172a]">
                  Careers content coming soon
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-[#5b6678]">
                  Open roles will appear here when available. Please check back soon.
                </p>
              </div>
            ) : jobs.length === 0 ? (
              <div className="surface-card mx-auto max-w-3xl border-[#d9e0ea] bg-white px-6 py-8 text-center sm:px-8">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0f172a] text-[#d4af37]">
                  <Briefcase className="h-7 w-7" />
                </div>
                <h2 className="mt-5 text-2xl font-bold text-[#0f172a]">
                  No open positions right now
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-[#5b6678]">
                  New roles will appear here when they become available. You can still reach out
                  for future opportunities.
                </p>
                <div className="mt-6">
                  <Link href={PRIMARY_CTA_HREF}>
                    <Button
                      className="rounded-xl font-semibold"
                      style={{ backgroundColor: "#0F172A", color: "#F8FAFC" }}
                    >
                      {PRIMARY_CTA_LABEL}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="max-w-2xl">
                  <h2 className="text-2xl font-bold tracking-tight text-[#0f172a]">
                    Open Positions
                  </h2>
                  <p className="mt-2 text-base leading-7 text-[#5b6678]">
                    Browse current opportunities and apply directly from each role page.
                  </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  {jobs.map((job) => (
                    <JobCard key={job._id} job={job} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
