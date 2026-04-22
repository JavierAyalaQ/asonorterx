// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://asonorterx.netlify.app",

  vite: {
    plugins: [tailwindcss()],
  },

  fonts: [
    {
      name: "Inter",
      cssVariable: "--font-inter",
      provider: fontProviders.fontsource(),
    },
    {
      name: "DM Serif Display",
      cssVariable: "--font-dm-serif-display",
      provider: fontProviders.fontsource(),
    },
  ],
});
