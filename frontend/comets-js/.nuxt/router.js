import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0526a816 = () => interopDefault(import('../pages/forgot-password.vue' /* webpackChunkName: "pages/forgot-password" */))
const _19e4f28c = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _60f396ba = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _11625fe2 = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _3f609658 = () => interopDefault(import('../pages/reset-password.vue' /* webpackChunkName: "pages/reset-password" */))
const _49fd5251 = () => interopDefault(import('../pages/products/_id/index.vue' /* webpackChunkName: "pages/products/_id/index" */))
const _2965e3a3 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _0526a816,
    name: "forgot-password"
  }, {
    path: "/login",
    component: _19e4f28c,
    name: "login"
  }, {
    path: "/profile",
    component: _60f396ba,
    name: "profile"
  }, {
    path: "/register",
    component: _11625fe2,
    name: "register"
  }, {
    path: "/reset-password",
    component: _3f609658,
    name: "reset-password"
  }, {
    path: "/products/:id",
    component: _49fd5251,
    name: "products-id"
  }, {
    path: "/",
    component: _2965e3a3,
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
