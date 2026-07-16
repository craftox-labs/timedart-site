// @ts-check
import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import { remarkCallouts } from "./src/lib/remark-callouts.mjs";

export default defineConfig({
  integrations: [],
  markdown: {
    processor: unified({ remarkPlugins: [remarkCallouts] }),
  },
});
