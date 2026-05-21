import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, PhoneCall, UserRound } from "lucide-react";
import { notFound } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { PostCard } from "@/components/blog/post-card";
import { BlogPortableText } from "@/components/blog/portable-text";
import { getPostBySlug, getPostSlugs, getRelatedPosts } from "@/sanity/lib/api";
import { urlForImage } from "@/sanity/lib/image";
import { siteUrl } from "@/sanity/env";
import {
  PRIMARY_CTA_HREF,
  PRIMARY_CTA_LABEL,
  SECONDARY_CTA_HREF,
  SECONDARY_CTA_LABEL,
} from "@/lib/cta";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 300;

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | HVB Solutions",
    };
  }

  const title = post.seo?.metaTitle || `${post.title} | HVB Solutions`;
  const description =
    post.seo?.metaDescription ||
    post.excerpt ||
    "Article from HVB Solutions.";
  const canonical =
    post.seo?.canonicalUrl || `${siteUrl}/blog/${post.slug.current}`;
  const imageUrl = post.mainImage
    ? urlForImage(post.mainImage)?.width(1200).height(630).fit("crop").url()
    : undefined;

  return {
    title,
    description,
    keywords: post.seo?.keywords,
    alternates: {
      canonical,
    },
    robots: {
      index: !post.seo?.noIndex,
      follow: true,
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: canonical,
      publishedTime: post.publishedAt,
      images: imageUrl ? [{ url: imageUrl }] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(post._id);
  const heroImageUrl = post.mainImage
    ? urlForImage(post.mainImage)?.width(1600).height(900).fit("crop").url()
    : null;

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.14),_transparent_20%),linear-gradient(135deg,_rgba(15,23,42,0.06),_white_40%,_rgba(248,250,252,0.96)_100%)] section-space-tight">
          <div className="site-shell">
            <div className="site-shell-inner">
              <div className="mx-auto max-w-4xl">
                {post.categories?.length ? (
                  <div className="mb-5 flex flex-wrap gap-2">
                    {post.categories.map((category) => (
                      <span
                        key={category._id}
                        className="rounded-full border border-[#d4af37]/35 bg-white/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#b88b16]"
                      >
                        {category.title}
                      </span>
                    ))}
                  </div>
                ) : null}
                <h1 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl xl:text-[3rem]">
                  {post.title}
                </h1>
                <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-[#64748b]">
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-[#b88b16]" />
                    {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                  {post.author?.name ? (
                    <span className="inline-flex items-center gap-2">
                      <UserRound className="h-4 w-4 text-[#b88b16]" />
                      {post.author.name}
                    </span>
                  ) : null}
                </div>
                {post.excerpt ? (
                  <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5b6678]">
                    {post.excerpt}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </section>

        <section className="section-space bg-[#f8fafc]">
          <div className="site-shell">
            <div className="site-shell-inner">
              <div className="mx-auto max-w-4xl space-y-8">
                {heroImageUrl ? (
                  <div className="surface-card overflow-hidden border-[#d9e0ea]">
                    <div className="relative aspect-[16/9]">
                      <Image
                        src={heroImageUrl}
                        alt={post.mainImage?.alt || post.title}
                        fill
                        priority
                        sizes="(max-width: 1279px) 100vw, 1000px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                ) : null}

                <article className="surface-card border-[#d9e0ea] bg-white px-6 py-6 sm:px-8 sm:py-8 lg:px-10">
                  {post.body?.length ? (
                    <div className="prose prose-lg max-w-none text-[#475569] prose-headings:text-[#0f172a] prose-p:leading-8 prose-strong:text-[#0f172a]">
                      <BlogPortableText value={post.body} />
                    </div>
                  ) : (
                    <p className="text-base leading-7 text-[#5b6678]">
                      This article does not have content yet.
                    </p>
                  )}

                  <div className="mt-10 overflow-hidden rounded-[24px] bg-gradient-to-r from-[#0f172a] via-[#111c34] to-[#1e293b] px-6 py-8 text-white shadow-[0_22px_48px_rgba(15,23,42,0.18)]">
                    <h2 className="text-2xl font-bold tracking-tight">
                      Need help applying this to your business?
                    </h2>
                    <p className="mt-3 max-w-2xl text-base leading-7 text-white/72">
                      Speak with HVB Solutions for accounting, audit, tax, or
                      fractional CFO support tailored to your business goals.
                    </p>
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                      <Link href={PRIMARY_CTA_HREF}>
                        <Button
                          className="h-12 rounded-xl px-6 text-sm font-semibold sm:px-7 sm:text-base"
                          style={{ backgroundColor: "#D4AF37", color: "#0F172A" }}
                        >
                          {PRIMARY_CTA_LABEL}
                        </Button>
                      </Link>
                      <a href={SECONDARY_CTA_HREF}>
                        <Button
                          variant="outline"
                          className="h-12 rounded-xl border-white/20 bg-white/6 px-6 text-sm font-semibold text-white hover:bg-white/10 sm:px-7 sm:text-base"
                        >
                          <PhoneCall className="mr-2 h-4 w-4" />
                          {SECONDARY_CTA_LABEL}
                        </Button>
                      </a>
                    </div>
                  </div>
                </article>

                {post.author ? (
                  <div className="surface-card border-[#d9e0ea] bg-white px-6 py-6 sm:px-8">
                    <div className="text-sm font-semibold uppercase tracking-[0.14em] text-[#64748b]">
                      Author
                    </div>
                    <h2 className="mt-2 text-2xl font-bold text-[#0f172a]">
                      {post.author.name}
                    </h2>
                    {post.author.role ? (
                      <p className="mt-2 text-sm font-medium text-[#b88b16]">
                        {post.author.role}
                      </p>
                    ) : null}
                    {post.author.bio ? (
                      <p className="mt-4 text-base leading-7 text-[#5b6678]">
                        {post.author.bio}
                      </p>
                    ) : null}
                  </div>
                ) : null}

                {post.faqs?.length ? (
                  <div className="surface-card border-[#d9e0ea] bg-white px-6 py-6 sm:px-8">
                    <h2 className="text-2xl font-bold text-[#0f172a]">
                      Frequently Asked Questions
                    </h2>
                    <Accordion className="mt-6">
                      {post.faqs.map((faq, index) => (
                        <AccordionItem
                          key={`${faq.question}-${index}`}
                          value={`faq-${index}`}
                          className="border-[#e2e8f0]"
                        >
                          <AccordionTrigger className="py-4 text-base font-semibold text-[#0f172a] hover:no-underline">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="pb-4 text-sm leading-7 text-[#5b6678]">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ) : null}

                {relatedPosts.length ? (
                  <div>
                    <div className="mb-6 flex items-center justify-between gap-4">
                      <h2 className="text-2xl font-bold tracking-tight text-[#0f172a]">
                        Related Articles
                      </h2>
                      <Link
                        href="/blog"
                        className="text-sm font-semibold text-[#0f172a] underline decoration-[#d4af37] underline-offset-4"
                      >
                        View all articles
                      </Link>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                      {relatedPosts.map((relatedPost) => (
                        <PostCard key={relatedPost._id} post={relatedPost} />
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
