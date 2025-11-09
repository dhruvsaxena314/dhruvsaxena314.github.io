import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/dhruvsaxena314.github.io/',   // 👈 IMPORTANT
});
