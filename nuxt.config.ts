// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/content'
  ],
  colorMode: {
    classSuffix: ''
  },
  content: {
    highlight: {
      // Theme used in all color schemes.
      // theme: 'github-light'
      // OR
      theme: {
        // Default theme (same as single string)
        default: 'vitesse-light',
        // Theme used if `html.dark`
        dark: 'vitesse-dark',
        // Theme used if `html.sepia`
        sepia: 'monokai'
      }
    }
  }
})
