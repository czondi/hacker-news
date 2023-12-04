// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Hacker News",
      meta: [{ name: "description", content: 'A "Hacker News" redesign.' }],
    },
    rootId: "app",
  },
  modules: [
    "@nuxtjs/eslint-module",
    "@nuxtjs/tailwindcss",
    "@formkit/auto-animate/nuxt",
    "@nuxtjs/color-mode",
    "nuxt-icon",
  ],
  eslint: {
    lintOnStart: false,
  },
  colorMode: {
    classSuffix: "",
  },
  runtimeConfig: {
    hnBaseUrl: "https://hacker-news.firebaseio.com/v0",
  },
});
