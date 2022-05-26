import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import svelte from "@astrojs/svelte";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), svelte()],
  adapter: node(),
});