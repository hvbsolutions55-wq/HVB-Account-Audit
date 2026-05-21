import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpenText } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { PostCard } from "@/components/blog/post-card";
import { Button } from "@/components/ui/button";
import { getAllPosts } from "@/sanity/lib/api";
import { isSanityConfigured, siteUrl } from "@/sanity/env";
import { PRIMARY_CTA_HREF, PRIMARY_CTA_LABEL } from "@/lib/cta";

export const metadata: Metadata = {
  title: "Blog | HVB Solutions",
  description:
    "Insights on accounting, audit, tax, and financial operations from HVB Solutions.",
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
  openGraph: {
    title: "Blog | HVB Solutions",
    description:
      "Insights on accounting, audit, tax, and financial operations from HVB Solutions.",
    url: `${siteUrl}/blog`,
    type: "website",
  },
};

export const revalidate = 300;

export default async function BlogPage() {
  const posts = await getAllPosts();
  const [featuredPost, ...remainingPosts] = posts;

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.14),_transparent_20%),linear-gradient(135deg,_rgba(15,23,42,0.06),_white_40%,_rgba(248,250,252,0.96)_100%)] section-space-tight">
          <div className="site-shell">
            <div className="site-shell-inner">
              <div className="max-w-3xl">
                <div className="mb-4 inline-flex items-center rounded-full border border-[#d4af37]/35 bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#b88b16] backdrop-blur">
                  Insights & Marketing Content
                </div>
                <h1 className="mb-4 text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl xl:text-[2.8rem]">
                  Blog &amp; Insights
                </h1>
                <p className="max-w-2xl text-base leading-7 text-[#5b6678] xl:text-lg">
                  Publish SEO-focused articles, educate potential clients, and
                  support lead generation with consistent financial content.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-space bg-[#f8fafc]">
          <div className="site-shell">
            <div className="site-shell-inner">
              {!isSanityConfigured ? (
                <div className="surface-card mx-auto max-w-3xl border-[#d9e0ea] bg-white px-6 py-8 text-center sm:px-8">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0f172a] text-[#d4af37]">
                    <BookOpenText className="h-7 w-7" />
                  </div>
                  <h2 className="mt-5 text-2xl font-bold text-[#0f172a]">
                    Sanity setup required before publishing
                  </h2>
                  <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-[#5b6678]">
                    Add your Sanity project ID and dataset to the environment
                    variables, then open the Studio at <code>/studio</code> to
                    create posts, categories, and authors.
                  </p>
                </div>
              ) : posts.length === 0 ? (
                <div className="surface-card mx-auto max-w-3xl border-[#d9e0ea] bg-white px-6 py-8 text-center sm:px-8">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0f172a] text-[#d4af37]">
                    <BookOpenText className="h-7 w-7" />
                  </div>
                  <h2 className="mt-5 text-2xl font-bold text-[#0f172a]">
                    No blog posts published yet
                  </h2>
                  <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-[#5b6678]">
                    Create your first article in Sanity Studio and it will appear
                    here automatically.
                  </p>
                </div>
              ) : (
                <div className="space-y-8">
                  {featuredPost ? (
                    <div>
                      <div className="mb-5 inline-flex items-center rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#64748b] shadow-sm">
                        Featured Article
                      </div>
                      <PostCard post={featuredPost} featured />
                    </div>
                  ) : null}

                  {remainingPosts.length > 0 ? (
                    <div>
                      <div className="mb-6 flex items-center justify-between gap-4">
                        <h2 className="text-2xl font-bold tracking-tight text-[#0f172a]">
                          Latest Articles
                        </h2>
                      </div>
                      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {remainingPosts.map((post) => (
                          <PostCard key={post._id} post={post} />
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="section-space-tight bg-white">
          <div className="site-shell">
            <div className="site-shell-inner">
              <div className="overflow-hidden rounded-[30px] bg-gradient-to-r from-[#0f172a] via-[#111c34] to-[#1e293b] px-6 py-10 text-white shadow-[0_26px_60px_rgba(15,23,42,0.18)] sm:px-8 lg:px-12 lg:py-12">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Turn readers into qualified leads
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
                  Pair educational content with a strong advisory offer so blog
                  traffic supports consultations and direct outreach.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href={PRIMARY_CTA_HREF}>
                    <Button
                      size="lg"
                      className="h-12 rounded-xl px-6 text-sm font-semibold sm:px-7 sm:text-base"
                      style={{ backgroundColor: "#D4AF37", color: "#0F172A" }}
                    >
                      {PRIMARY_CTA_LABEL}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
