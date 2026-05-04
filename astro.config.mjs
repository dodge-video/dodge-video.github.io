// SPDX-License-Identifier: PolyForm-Noncommercial-1.0.0
// Required Notice: Copyright 2026 Ethan Witwer (https://dodge.video)

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
