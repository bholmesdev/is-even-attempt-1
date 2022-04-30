import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";
import turbolinks from "@astrojs/turbolinks";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), turbolinks()]
});