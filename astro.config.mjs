import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://future-skills.bridge-brain.ai',
  integrations: [tailwind()],
});
