import { defineQuery } from "next-sanity";

const postFields = `
  _id,
  title,
  slug,
  excerpt,
  publishedAt,
  featured,
  mainImage{
    asset,
    alt,
    caption
  },
  author->{
    _id,
    name,
    role,
    bio
  },
  categories[]->{
    _id,
    title,
    slug
  }
`;

export const POSTS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)]
    | order(featured desc, publishedAt desc) {
      ${postFields}
    }
`);

export const POST_SLUGS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current)][].slug.current
`);

export const POST_BY_SLUG_QUERY = defineQuery(`
  *[_type == "post" && slug.current == $slug][0]{
    ${postFields},
    body,
    seo{
      metaTitle,
      metaDescription,
      canonicalUrl,
      keywords,
      noIndex
    },
    faqs[]{
      question,
      answer
    }
  }
`);

export const RELATED_POSTS_QUERY = defineQuery(`
  *[_type == "post" && defined(slug.current) && _id != $postId]
    | order(publishedAt desc)[0...3]{
      ${postFields}
    }
`);

const jobFields = `
  _id,
  title,
  slug,
  location,
  employmentType,
  department,
  excerpt,
  publishedAt,
  isOpen
`;

export const JOBS_QUERY = defineQuery(`
  *[_type == "jobOpening" && isOpen == true && defined(slug.current)]
    | order(publishedAt desc) {
      ${jobFields}
    }
`);

export const JOB_SLUGS_QUERY = defineQuery(`
  *[_type == "jobOpening" && isOpen == true && defined(slug.current)][].slug.current
`);

export const JOB_BY_SLUG_QUERY = defineQuery(`
  *[_type == "jobOpening" && slug.current == $slug && isOpen == true][0]{
    ${jobFields},
    body,
    applyEmail,
    applyUrl,
    seo{
      metaTitle,
      metaDescription,
      canonicalUrl,
      keywords,
      noIndex
    }
  }
`);
