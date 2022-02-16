import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _abbbb998 = () => interopDefault(import('..\\pages\\forgot-password.vue' /* webpackChunkName: "pages/forgot-password" */))
const _5bb4af58 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _3c730fd8 = () => interopDefault(import('..\\pages\\profile.vue' /* webpackChunkName: "pages/profile" */))
const _b45beaf8 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _3ccb810c = () => interopDefault(import('..\\pages\\reset-password.vue' /* webpackChunkName: "pages/reset-password" */))
const _292edf1d = () => interopDefault(import('..\\pages\\products\\_id\\index.vue' /* webpackChunkName: "pages/products/_id/index" */))
const _dbe5e77e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _abbbb998,
    name: "forgot-password"
  }, {
    path: "/login",
    component: _5bb4af58,
    name: "login"
  }, {
    path: "/profile",
    component: _3c730fd8,
    name: "profile"
  }, {
    path: "/register",
    component: _b45beaf8,
    name: "register"
  }, {
    path: "/reset-password",
    component: _3ccb810c,
    name: "reset-password"
  }, {
    path: "/products/:id",
    component: _292edf1d,
    name: "products-id"
  }, {
    path: "/",
    component: _dbe5e77e,
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
