// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxtjs/google-fonts'],
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  ui: {
    theme: {
      colors: ['primary', 'error']
    },
    fonts: true,
    colorMode: false,
    
  },
  googleFonts: {
    families: {
      'Plus Jakarta Sans': {
        wght: '200..800', 
        ital: '200..800'  
      },
    }
  },
})