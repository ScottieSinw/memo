// workbox-config.ts
module.exports = {
  globDirectory: 'build/',
  globPatterns: ['**/*.{js,gz,txt,svg,ico,png,json,css,html}'],
  swDest: 'build/sw.js',
  runtimeCaching: [
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'images',
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30일
        },
      },
    },
    {
      urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com/,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'google-fonts',
      },
    },
  ],
};
