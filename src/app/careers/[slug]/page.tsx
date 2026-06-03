import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Briefcase, CalendarDays, MapPin } from "lucide-react";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { BlogPortableText } from "@/components/blog/portable-text";
import { PageShell } from "@/components/page-shell";
import { getJobBySlug, getJobSlugs } from "@/sanity/lib/api";
import { siteUrl } from "@/sanity/env";
import { CONTACT_EMAIL } from "@/lib/site";

type JobPageProps = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 300;

const employmentLabels: Record<string, string> = {
  "full-time": "Full-time",
  "part-time": "Part-time",
  contract: "Contract",
  freelance: "Freelance",
};

export async function generateStaticParams() {
  const slugs = await getJobSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: JobPageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = await getJobBySlug(slug);

  if (!job) {
    return { title: "Job Not Found | HVB Solutions" };
  }

  const title = job.seo?.metaTitle || `${job.title} | Careers | HVB Solutions`;
  const description =
    job.seo?.metaDescription || job.excerpt || "Job opening at HVB Solutions.";
  const canonical = job.seo?.canonicalUrl || `${siteUrl}/careers/${job.slug.current}`;

  return {
    title,
    description,
    keywords: job.seo?.keywords,
    alternates: { canonical },
    robots: { index: !job.seo?.noIndex, follow: true },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonical,
    },
  };
}

function getApplyHref(job: { title: string; applyEmail?: string; applyUrl?: string }) {
  if (job.applyUrl) {
    return job.applyUrl;
  }

  const email = job.applyEmail || CONTACT_EMAIL;
  const subject = encodeURIComponent(`Application: ${job.title}`);
  return `mailto:${email}?subject=${subject}`;
}

export default async function JobPage({ params }: JobPageProps) {
  const { slug } = await params;
  const job = await getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  const employmentLabel =
    employmentLabels[job.employmentType] || job.employmentType;
  const applyHref = getApplyHref(job);
  const isExternalApply = Boolean(job.applyUrl);

  return (
    <PageShell>
      <section className="section-space-tight bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.14),_transparent_20%),linear-gradient(135deg,_rgba(15,23,42,0.06),_white_40%,_rgba(248,250,252,0.96)_100%)]">
        <div className="site-shell">
          <div className="site-shell-inner max-w-3xl">
            <Link
              href="/careers"
              className="mb-6 inline-flex items-center text-sm font-semibold text-[#5b6678] transition-colors hover:text-[#0f172a]"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to careers
            </Link>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/35 bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#b88b16]">
              <Briefcase className="h-3.5 w-3.5" />
              Open Role
            </div>
            <h1 className="mb-4 text-3xl font-bold text-[#0f172a] sm:text-4xl">{job.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-[#64748b]">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#b88b16]" />
                {job.location}
              </span>
              <span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#64748b]">
                {employmentLabel}
              </span>
              {job.department ? (
                <span className="inline-flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-[#b88b16]" />
                  {job.department}
                </span>
              ) : null}
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-[#b88b16]" />
                Posted{" "}
                {new Date(job.publishedAt).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="site-shell">
          <div className="site-shell-inner max-w-3xl">
            {job.excerpt ? (
              <p className="text-lg leading-8 text-[#5b6678]">{job.excerpt}</p>
            ) : null}
            {job.body ? (
              <div className="prose prose-lg mt-8 max-w-none">
                <BlogPortableText value={job.body} />
              </div>
            ) : null}
            <div className="mt-10">
              <Link
                href={applyHref}
                target={isExternalApply ? "_blank" : undefined}
                rel={isExternalApply ? "noopener noreferrer" : undefined}
              >
                <Button
                  size="lg"
                  className="rounded-xl font-semibold"
                  style={{ backgroundColor: "#D4AF37", color: "#0F172A" }}
                >
                  Apply for this role
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
