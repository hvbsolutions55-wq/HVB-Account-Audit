export type SanitySlug = {
  current: string;
};

export type SanityCategory = {
  _id: string;
  title: string;
  slug?: SanitySlug;
};

export type SanityAuthor = {
  _id: string;
  name: string;
  role?: string;
  bio?: string;
};

export type SanityImage = {
  asset?: {
    _ref?: string;
    _type?: "reference";
  };
  alt?: string;
  caption?: string;
};

export type SanityFaq = {
  question: string;
  answer: string;
};

export type SanitySeo = {
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  keywords?: string[];
  noIndex?: boolean;
};

export type BlogPostCard = {
  _id: string;
  title: string;
  slug: SanitySlug;
  excerpt?: string;
  publishedAt: string;
  featured?: boolean;
  mainImage?: SanityImage;
  categories?: SanityCategory[];
  author?: SanityAuthor;
};

export type BlogPost = BlogPostCard & {
  body?: unknown[];
  seo?: SanitySeo;
  faqs?: SanityFaq[];
};
