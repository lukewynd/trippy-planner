import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/trippy-planner/',
  plugins: [
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icon-512.png'],
      manifest: {
        name: 'Trippy Planner',
        short_name: 'Trippy',
        description: 'Plan and share your trips with friends',
        theme_color: '#7c6af7',
        background_color: '#0b0d14',
        display: 'standalone',
        orientation: 'any',
        start_url: '/trippy-planner/',
        scope: '/trippy-planner/',
        icons: [
          {
            src: 'icon-512.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff,woff2}'],
        navigateFallback: null,
      },
    }),
  ],
});
