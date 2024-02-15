// https://nuxt.com/docs/api/configuration/nuxt-config
const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
      app: {
        baseURL: '/nuxt-starter-template'
      }
    }
    : {}

export default defineNuxtConfig({
  ...routerBase,
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
    'nuxt-og-image',
    '@nuxt/image',
    '@nuxthq/studio'
  ],
  ui: {
    icons: ['heroicons']
  },
  fontMetrics: {
    fonts: ['DM Sans']
  },
  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      'DM+Sans': [400, 500, 600, 700]
    }
  },
  devtools: {
    enabled: true
  },
  typescript: {
    strict: false
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano:
        process.env.NODE_ENV === 'production'
          ? { preset: ['default', { discardComments: { removeAll: true } }] }
          : false, // disable cssnano when not in production
    },
  },
  routeRules: {
    '/': { prerender: true },
  }
})
