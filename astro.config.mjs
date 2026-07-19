// @ts-check
import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import { remarkCallouts } from "./src/lib/remark-callouts.mjs";

export default defineConfig({
  integrations: [],
  // Emit every stylesheet as a linked file (never inline). Inline <style>
  // blocks can be dropped during a ClientRouter view-transition swap, which
  // flashed the 404's terminal to unstyled text; linked sheets are deduped
  // and persisted across swaps, so they don't.
  build: { inlineStylesheets: "never" },
  // No separate docs landing page — /docs opens the first page directly.
  redirects: {
    "/docs": "/docs/getting-started",
  },
  markdown: {
    processor: unified({ remarkPlugins: [remarkCallouts] }),
  },
});
