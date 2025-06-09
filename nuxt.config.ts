import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css', 
    'boxicons/css/boxicons.min.css',
    'animate.css/animate.min.css'
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
        }
      ]
    }
  },
  ssr: true,
  typescript: {
    strict: true,
  },
  modules: ['@formkit/auto-animate/nuxt'],

})