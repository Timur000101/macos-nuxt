// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   compatibilityDate: "2024-04-03",
   devtools: { enabled: true },
   modules: ["@nuxt/eslint"],
   eslint: {
      checker: true,
      config: {
         stylistic: true,
      },
   },
   typescript: {
      typeCheck: true,
   },
});
