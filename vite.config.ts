import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteCommonjs } from '@originjs/vite-plugin-commonjs';
import { isDev } from './src/utils';
const path = require('path');

const basePublicPath = isDev ? '/' : process.env.PUBLIC_ASSET_PATH;
export default defineConfig({
  plugins: [react(), viteCommonjs()],
  base: basePublicPath,
  define: {
    'process.env': {
      isDev,
    },
    'process.browser': true,
  },
  build: {
    rollupOptions: {
      manualChunks: {
        'react-i18next': ['react-i18next'],
      },
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  css: {
    modules: {
      scopeBehaviour: 'global',
    },
  },
  resolve: {
    alias: {
      '@': path.resolve('./src'),
    },
    dedupe: ['react-i18next'],
  },
});
