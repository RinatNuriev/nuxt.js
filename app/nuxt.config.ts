export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Roboto: true,
          Lato: {
            wght: [300, 400, 700],
            ital: [100],
          },
        },
      },
    ],
    "nuxt-icon",
    "@pinia/nuxt",
  ],
  shadcn: {
    prefix: "Ui",
    componentDir: "./components/ui",
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
});
