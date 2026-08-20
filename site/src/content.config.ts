import { defineCollection } from "astro:content";
import { z } from "astro/zod";

import type { SanityDocument } from "@sanity/client";
import { sanityClient } from "sanity:client";

import { sections } from "../../shared";

const articles = defineCollection({
  loader: async () => {
    const ARTICLES_QUERY = `*[_type == "article"]|order(publicationDate desc)`;
    const articles = await sanityClient.fetch<SanityDocument[]>(ARTICLES_QUERY);
    return articles.map((ev) => ({ id: ev._id, ...ev }));
  },
  schema: z.object({
    id: z.string(),
    section: z.literal(sections.map((s) => s.value)),
    title: z.string(),
    publicationName: z.string(),
    publicationDate: z.coerce.date(),
    link: z.string(),
    notes: z.any().optional(),
  }),
});

export const collections = { articles };
