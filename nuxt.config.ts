import colors from 'vuetify/es5/util/colors';
import NuxtConfiguration from '@nuxt/config';

export default {
  dev: (process.env.NODE_ENV !== 'production'),
  mode: 'spa',
  head: {
    title: 'Freevue - Korea',
    meta: [
      { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' },
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' },
      { name: 'theme-color', content: '#ffffff' },
      {
        hid: 'description',
        name: 'description',
        content: "Korea! Freevue's Small Project"
      },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      { name: 'apple-mobile-web-app-title', content: 'Freevue POP' },
      { property: 'og:locale', content: 'ko_KR' },
      { property: 'og:description', content: '기억하겠습니다.' },
      { property: 'og:url', content: 'https://freevue-korea.netlify.com/' },
      { property: 'og:site_name', content: 'Freevue-Korea' },
      { property: 'og:image', content: 'https://freevuehub.github.io/images/com/share-logo.jpg' },
      { property: 'twitter:description', content: '기억하겠습니다.' },
      { property: 'twitter:title', content: 'Freevue-Korea' },
      { property: 'twitter:image', content: 'https://freevuehub.github.io/images/com/share-logo.jpg' },
      { property: 'twitter:card', content: 'summary' },
    ],
    link: [
      { rel: 'icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/icons/icon-152x152.png' },
    ],
  },
  loading: { color: '#fff' },
  css: [
    'assets/main.css'
  ],
  plugins: [
    { src: '~plugins/ga.js', ssr: false }
  ],
  devModules: [
    '@nuxtjs/vuetify',
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/proxy'
  ],
  axios: {
    proxy: true
  },
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: '#72cc96'
        }
      }
    }
  },
  build: {
    extend(config, ctx) {
    }
  },
  manifest: {
    name: 'Freevue-Project',
    short_name: 'Freevue-Korea',
    start_url: '/',
    Scope: '/',
    splash_pages: null,
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff'
  },
  workbox: {
    offline: false,
    runtimeCaching: [
      {
        urlPattern: "/*",
        handler: "networkFirst",
        method: "GET"
      }
    ]
  },
} as NuxtConfiguration;
