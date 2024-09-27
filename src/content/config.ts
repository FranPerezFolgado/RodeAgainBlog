import { defineCollection, z } from "astro:content";
const posts = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      lastModified: z.string().optional(),
      cover: image(),
      coverAlt: z.string(),
      tag: z.string(),
      author: z.string(),
      postAlbum: z.string().optional(),
      referralLink: z.string().optional(),
      referralImage: z.string().optional(),
      referralDescription: z.string().optional(),
      referralTitle: z.string().optional(),
    }),
});

const photos = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      cover: image(),
    }),
});

export const collections = { posts, photos };
