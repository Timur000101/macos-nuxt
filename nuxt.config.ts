// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
  },
  alias: {
    '~': '/<srcDir>',
  },
  eslint: {
    checker: true,
    config: {
      standalone: false,
      stylistic: true,
    },
  },
  typescript: {
    typeCheck: true,
  },
})
