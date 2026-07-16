// @ts-check
import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import { remarkCallouts } from "./src/lib/remark-callouts.mjs";

export default defineConfig({
  integrations: [],
  // No separate docs landing page — /docs opens the first page directly.
  redirects: {
    "/docs": "/docs/getting-started",
  },
  markdown: {
    processor: unified({ remarkPlugins: [remarkCallouts] }),
  },
});
