import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Docs are plain CommonMark + frontmatter, shared verbatim with the Flutter
// app's in-app docs viewer (see the docs contract — SSOT for both renderers).
// Slug is derived from the file name, e.g. `tracking-time.md` -> `tracking-time`.
const docs = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/docs" }),
  schema: z.object({
    title: z.string(),
    group: z.string(),
    order: z.number(),
    summary: z.string().optional(),
  }),
});

export const collections = { docs };
