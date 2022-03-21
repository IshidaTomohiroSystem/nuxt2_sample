export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'firebase_sample002',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  
  modules: ['@nuxtjs/firebase'],
  firebase: {
    lazy: false,
    config: {
      apiKey: "AIzaSyAC42Jyrc6PUprA_fmVtmGAcUvL8HPiLxY",
      authDomain: "myapp-5fb21.firebaseapp.com",
      projectId: "myapp-5fb21",
      storageBucket: "myapp-5fb21.appspot.com",
      messagingSenderId: "671642384568",
      appId: "1:671642384568:web:dae645d42a8dca7aab1c4d"
    },
    onFirebaseHosting: false,
    services: {
      auth: {
        initialize: {
          onAuthStateChangedAction: 'onAuthStateChanged',
          onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
        },
      },
      firestore: {
        enablePersistence: true
      },
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  css: ["element-ui/lib/theme-chalk/index.css"],
  plugins: [
    "@/plugins/element-ui",
    "@/plugins/asyncComputed",
  ],
  ssr: false,
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    //'@nuxtjs/tailwindcss',
    '@nuxtjs/firebase',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  //modules: ['@nuxtjs/pwa'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  router: {
    // middleware: 'testMiddleware',
  },
}
