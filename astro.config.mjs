import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import partytown from "astro-partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    icon({
      include: {
        tabler: ["*"],
      },
    }),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
  }),
  ],
});
