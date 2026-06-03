import Link from "next/link";
import { ArrowRight, Briefcase, CalendarDays, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { JobOpeningCard } from "@/sanity/lib/types";

const employmentLabels: Record<string, string> = {
  "full-time": "Full-time",
  "part-time": "Part-time",
  contract: "Contract",
  freelance: "Freelance",
};

type JobCardProps = {
  job: JobOpeningCard;
};

export function JobCard({ job }: JobCardProps) {
  const employmentLabel =
    employmentLabels[job.employmentType] || job.employmentType;

  return (
    <Link href={`/careers/${job.slug.current}`} className="group block">
      <Card className="surface-card h-full border-[#d9e0ea] bg-white transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(15,23,42,0.12)]">
        <CardHeader className="px-5 pt-5 sm:px-6 sm:pt-6">
          <div className="flex flex-wrap items-center gap-3 text-sm text-[#64748b]">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#b88b16]" />
              {job.location}
            </span>
            <span className="rounded-full bg-[#f8fafc] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#64748b]">
              {employmentLabel}
            </span>
            {job.department ? (
              <span className="inline-flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-[#b88b16]" />
                {job.department}
              </span>
            ) : null}
          </div>
          <CardTitle className="mt-3 text-2xl tracking-tight text-[#0f172a]">
            {job.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="px-5 pb-5 sm:px-6 sm:pb-6">
          {job.excerpt ? (
            <p className="text-base leading-7 text-[#5b6678]">{job.excerpt}</p>
          ) : null}
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-[#64748b]">
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-[#b88b16]" />
              {new Date(job.publishedAt).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>
          <div className="mt-5 inline-flex items-center text-sm font-semibold text-[#0f172a]">
            View role
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
