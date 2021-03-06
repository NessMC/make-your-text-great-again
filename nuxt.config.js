
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Make your text great again',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Make your text great again with this website! Generate Trump memes with custom image and custom text.' },

      // OG Metas

      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: '/your_text.png' },
      { property: 'og:title', content: 'Make your text great again' },
      { property: 'og:url', content: 'https://make-text-great-again.netlify.app/' },
      { property: 'og:description', content: 'Make your text great again with this website! Generate Trump memes with custom image and custom text.' },

      // Twitter Metas

      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: 'https://make-text-great-again.netlify.app/' },
      { property: 'twitter:title', content: 'Make your text great again' },
      { property: 'twitter:description', content: 'Make your text great again with this website! Generate Trump memes with custom image and custom text.' },
      { property: 'twitter:image', content: '/your_text.png' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
