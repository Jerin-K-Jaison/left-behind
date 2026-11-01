import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://left-behind.onrender.com',
  output: 'static',
  build: { format: 'directory' },
});
