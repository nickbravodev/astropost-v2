import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import htmlBeautifier from "astro-html-beautifier";
// import lighthouse from "astro-lighthouse";
// import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  // output: "server",
  // adapter: netlify(),
  site: "https://astropost.io",
  integrations: [
    react(),
    mdx(),
    sitemap(),
    robotsTxt(),
    htmlBeautifier({
      indent_size: 2,
      end_with_newline: true,
      max_preserve_newlines: 2,
      preserve_newlines: true,
      space_in_paren: true,
      space_in_empty_paren: false,
      wrap_line_length: 0,
    }),
  ],
  // lighthouse(),
});
