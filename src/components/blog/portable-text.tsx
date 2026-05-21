import Image from "next/image";
import Link from "next/link";
import { PortableText } from "next-sanity";
import type { PortableTextComponents } from "next-sanity";
import { urlForImage } from "@/sanity/lib/image";

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-10 text-3xl font-bold tracking-tight text-[#0f172a]">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-8 text-2xl font-semibold tracking-tight text-[#0f172a]">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 rounded-r-2xl border-l-4 border-[#d4af37] bg-[#f8fafc] px-6 py-4 text-lg italic text-[#334155]">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <Link
        href={value?.href || "#"}
        className="font-medium text-[#0f172a] underline decoration-[#d4af37] underline-offset-4"
      >
        {children}
      </Link>
    ),
  },
  types: {
    image: ({ value }) => {
      const imageUrl = urlForImage(value)?.width(1400).fit("max").url();

      if (!imageUrl) {
        return null;
      }

      return (
        <figure className="my-10 overflow-hidden rounded-[28px] border border-[#e2e8f0] bg-white shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
          <div className="relative aspect-[16/9]">
            <Image
              src={imageUrl}
              alt={value?.alt || "Blog image"}
              fill
              sizes="(max-width: 1023px) 100vw, 900px"
              className="object-cover"
            />
          </div>
          {value?.alt ? (
            <figcaption className="px-5 py-3 text-sm text-[#64748b]">
              {value.alt}
            </figcaption>
          ) : null}
        </figure>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-5 list-disc space-y-2 pl-6 text-[#475569]">{children}</ul>
    ),
  },
};

type BlogPortableTextProps = {
  value: unknown[];
};

export function BlogPortableText({ value }: BlogPortableTextProps) {
  return <PortableText value={value} components={components} />;
}
