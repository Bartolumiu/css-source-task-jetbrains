// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  },
  vite: {
    css: {
      devSourcemap: true
    },
    build: {
      sourcemap: true,
      cssMinify: false
    }
  },
  sourcemap: {
    client: true,
    server: false
  }
})