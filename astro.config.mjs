import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
    site: "https://blog.mrmikedev.tech",
    integrations: [sitemap(), react(), tailwind()]
});
