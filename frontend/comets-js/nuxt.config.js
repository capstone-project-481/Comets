require("dotenv").config();
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'comets-js',
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
      { rel: 'preconnect', href: "https://app.snipcart.com" },
      { rel: 'preconnect', href: "https://cdn.snipcart.com" },
      { rel: 'stylesheet', href: "https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.css" },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.js'} 
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/dotenv'
  ],
  axios: {
    baseURL: "https://comets-strapi.onrender.com"
  },

  //This is the environment variable Snipcart left out in the tutorial this is where Strapi is located
  env: {
    storeUrl: process.env.STORE_URL 
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  
  //This handles authentication between Nuxt and Strapi
  auth:{
    strategies:{
      local:{
        endpoints:{
          //Post the login information using a jwt token to api/auth/local
          login:{
            url: 'api/auth/local',
            method: 'post',
            propertyName: 'jwt'
          },
          //Get user information from api/users/me
          user: {
            url: 'api/users/me',
            method: 'get',
            propertyName: false
          },
          logout: false
        }
      }
    }
  },
  googleAnalytics: {
    id: 'G-C7DCPYLFSG'
  },
}