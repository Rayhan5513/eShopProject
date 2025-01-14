export default defineNuxtConfig({
  css: ['@/assets/css/main.css'],

  ssr:false,

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: '2025-01-14',
})