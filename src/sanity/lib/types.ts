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

export type JobOpeningCard = {
  _id: string;
  title: string;
  slug: SanitySlug;
  location: string;
  employmentType: string;
  department?: string;
  excerpt?: string;
  publishedAt: string;
  isOpen?: boolean;
};

export type JobOpening = JobOpeningCard & {
  body?: unknown[];
  applyEmail?: string;
  applyUrl?: string;
  seo?: SanitySeo;
};
