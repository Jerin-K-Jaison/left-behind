import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://left-behind.example',
  output: 'static',
  build: { format: 'directory' },
});
