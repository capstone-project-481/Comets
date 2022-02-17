import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0bc03bbe = () => interopDefault(import('..\\pages\\forgot-password.vue' /* webpackChunkName: "pages/forgot-password" */))
const _ab97e73c = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _2ee15b3c = () => interopDefault(import('..\\pages\\profile.vue' /* webpackChunkName: "pages/profile" */))
const _7d3e193a = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _aa1c24a0 = () => interopDefault(import('..\\pages\\reset-password.vue' /* webpackChunkName: "pages/reset-password" */))
const _0bc6e65a = () => interopDefault(import('..\\pages\\products\\_id\\index.vue' /* webpackChunkName: "pages/products/_id/index" */))
const _3ee72d6a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/forgot-password",
    component: _0bc03bbe,
    name: "forgot-password"
  }, {
    path: "/login",
    component: _ab97e73c,
    name: "login"
  }, {
    path: "/profile",
    component: _2ee15b3c,
    name: "profile"
  }, {
    path: "/register",
    component: _7d3e193a,
    name: "register"
  }, {
    path: "/reset-password",
    component: _aa1c24a0,
    name: "reset-password"
  }, {
    path: "/products/:id",
    component: _0bc6e65a,
    name: "products-id"
  }, {
    path: "/",
    component: _3ee72d6a,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
