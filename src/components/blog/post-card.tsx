import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { BlogPostCard } from "@/sanity/lib/types";
import { urlForImage } from "@/sanity/lib/image";

type BlogPostCardProps = {
  post: BlogPostCard;
  featured?: boolean;
};

export function PostCard({ post, featured = false }: BlogPostCardProps) {
  const imageUrl = post.mainImage
    ? urlForImage(post.mainImage)?.width(featured ? 1400 : 900).height(featured ? 840 : 540).fit("crop").url()
    : null;

  return (
    <Link href={`/blog/${post.slug.current}`} className="group block">
      <Card className="surface-card h-full overflow-hidden border-[#d9e0ea] bg-white transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(15,23,42,0.12)]">
        {imageUrl ? (
          <div className={`relative overflow-hidden ${featured ? "aspect-[16/9]" : "aspect-[16/10]"}`}>
            <Image
              src={imageUrl}
              alt={post.mainImage?.alt || post.title}
              fill
              sizes={featured ? "(max-width: 1279px) 100vw, 60vw" : "(max-width: 1023px) 100vw, 33vw"}
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
        ) : null}
        <CardHeader className={featured ? "px-6 pt-6 sm:px-8 sm:pt-8" : "px-5 pt-5 sm:px-6 sm:pt-6"}>
          <div className="flex flex-wrap items-center gap-3 text-sm text-[#64748b]">
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-[#b88b16]" />
              {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
            {post.categories?.[0] ? (
              <span className="rounded-full bg-[#f8fafc] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#64748b]">
                {post.categories[0].title}
              </span>
            ) : null}
          </div>
          <CardTitle className={`${featured ? "mt-4 text-3xl sm:text-[2.2rem]" : "mt-3 text-2xl"} tracking-tight text-[#0f172a]`}>
            {post.title}
          </CardTitle>
        </CardHeader>
        <CardContent className={featured ? "px-6 pb-6 sm:px-8 sm:pb-8" : "px-5 pb-5 sm:px-6 sm:pb-6"}>
          {post.excerpt ? (
            <p className="text-base leading-7 text-[#5b6678]">
              {post.excerpt}
            </p>
          ) : null}
          <div className="mt-5 inline-flex items-center text-sm font-semibold text-[#0f172a]">
            Read article
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
