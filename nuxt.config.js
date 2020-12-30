export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'y',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [{
      src: "https://code.jquery.com/jquery-3.2.1.min.js",
      type: "text/javascript"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick.min.js",
      type: "text/javascript"
    }]
  },
  mode: 'universal',
  buildDir: 'firebase/functions/.nuxt',
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/static/css/slick.css',
    '@/static/css/slick-theme.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {
      src: '~/plugins/fontawesome.js'
    },
    { src: "~plugins/slick-slide.js", ssr: false },
    {
      src: '~/plugins/utils.js'
    }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    '@nuxtjs/bulma',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-i18n',
    [
      'nuxt-fontawesome', {
        imports: [{
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        },
        {
          set: '@fortawesome/free-brands-svg-icons', // Brand icons
          icons: ['faDev', 'faFacebook', 'faTwitter', 'faInstagram', 'faYoutube', 'faGoogle', 'faWhatsapp']
        }
        ]
      }

    ]
  ],

  i18n: {
    locales: ['id', 'en'],
    defaultLocale: 'id',
    strategy: 'prefix',
    vueI18nLoader: true,
    rootRedirect: 'id/',
    vueI18n: {
      fallbackLocale: 'id',
      messages: {
        en: {
          title: 'Welcome'
        },
        id: {
          title: 'Selamat Datang'
        }
      }
    }
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true,
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
  }
}
