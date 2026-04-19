// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/content', '@nuxt/hints', '@nuxtjs/sitemap'],
  site: {
    url: 'https://zearow.com'
  },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  nitro: {
    preset: 'github-pages',
    prerender: {
      routes: ['/blog/rss.xml']
    }
  },
  fonts: {
    families: [
      { name: 'Comfortaa', provider: 'google', weights: [300, 400, 500, 600, 700] }
    ]
  },
  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit'
      ]
    }
  }
})