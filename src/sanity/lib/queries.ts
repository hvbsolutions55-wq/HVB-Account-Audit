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
