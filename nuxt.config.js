import colors from 'vuetify/es5/util/colors'
import { ko } from 'vuetify/src/locale'

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    titleTemplate: '%s - ' + 'FreeVue',
    title: '나를 잊거든',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          process.env.npm_package_description ||
          '독립 유공자를 조금 더 쉽게 자주 접할 수 있게 해줍니다.',
      },
      {
        name: 'keywords',
        content:
          'FreeVue Project, FreeVue - Project, FreeVue, freevue, Korea, 나를 잊거든, 독립 유공자, 유공자',
      },
      { name: 'theme-color', content: '#71abbd' },
      { name: 'author', content: 'FreeVue' },
      { name: 'og:image', content: '/icon.png' },
      { name: 'og:title', content: '나를 잊거든 - FreeVue' },
      { name: 'twitter:title', content: '나를 잊거든 - FreeVue' },
      { name: 'subject', content: 'Freevue - Project' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: ['material-design-icons-iconfont/dist/material-design-icons.css'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '~/plugins/composition-api',
    '~/plugins/dayjs',
    '~/plugins/themeClass',
    { src: '~/plugins/ga.js', mode: 'client' },
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
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    ['@nuxtjs/google-analytics', { id: process.env.GOOGLE_ANALYTICE_ID }],
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  manifest: {
    name: '나를 잊거든',
    short_name: '나를 잊거든',
    start_url: '/?utm_source=homescreen',
    display: 'standalone',
    background_color: '#ffffff',
  },
  workbox: {
    offline: false,
    runtimeCaching: [
      {
        urlPattern: '/*',
        handler: 'networkFirst',
        method: 'GET',
      },
    ],
  },
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    lang: {
      locales: { ko },
      current: 'ko',
    },
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: '#71abbd',
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extend(config) {
      config.module.rules.push({
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      })
    },
  },
  env: {
    API_PROTOCOL: process.env.API_PROTOCOL,
    API_URL: process.env.API_URL,
  },
}
