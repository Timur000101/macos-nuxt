// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    'nuxt-svgo',
  ],
  svgo: {
    svgo: false,
    autoImportPath: './assets/icons/',
    componentPrefix: 'i',
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
  },
  image: {
    format: ['webp', 'png'],
    dir: 'assets/images',
  },
  components: {
    global: true,
    dirs: ['~/components'],
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
