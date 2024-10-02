import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import partytown from "@astrojs/partytown"

// https://astro.build/config
export default defineConfig({
  site: "https://rodeagain.netlify.app/",
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
