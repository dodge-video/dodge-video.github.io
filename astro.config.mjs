// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dodge.video',
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
  compressHTML: true,
});
