import { cache } from "react";
import { client, previewClient } from "./client";
import { isSanityConfigured } from "../env";
import {
  POST_BY_SLUG_QUERY,
  POSTS_QUERY,
  POST_SLUGS_QUERY,
  RELATED_POSTS_QUERY,
} from "./queries";
import type { BlogPost, BlogPostCard } from "./types";

const defaultFetchOptions = {
  next: { revalidate: 300 },
};

async function fetchSanity<T>(
  query: string,
  params: Record<string, unknown> = {},
  options: Record<string, unknown> = defaultFetchOptions,
  useFreshClient = false
): Promise<T | null> {
  const activeClient = useFreshClient ? previewClient : client;

  if (!activeClient || !isSanityConfigured) {
    return null;
  }

  try {
    return await activeClient.fetch<T>(query, params, options);
  } catch (error) {
    console.warn("Sanity fetch failed", error);
    return null;
  }
}

export const getAllPosts = cache(async (): Promise<BlogPostCard[]> => {
  return (await fetchSanity<BlogPostCard[]>(
    POSTS_QUERY,
    {},
    defaultFetchOptions
  )) ?? [];
});

export const getPostSlugs = cache(async (): Promise<string[]> => {
  return (await fetchSanity<string[]>(
    POST_SLUGS_QUERY,
    {},
    defaultFetchOptions,
    true
  )) ?? [];
});

export const getPostBySlug = cache(async (slug: string): Promise<BlogPost | null> => {
  return await fetchSanity<BlogPost>(
    POST_BY_SLUG_QUERY,
    { slug },
    defaultFetchOptions,
    true
  );
});

export const getRelatedPosts = cache(
  async (postId: string): Promise<BlogPostCard[]> => {
    return (
      (await fetchSanity<BlogPostCard[]>(
        RELATED_POSTS_QUERY,
        { postId },
        defaultFetchOptions
      )) ?? []
    );
  }
);
