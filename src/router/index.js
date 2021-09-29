import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store/index.js'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: () => import('@/views/Landing-Page.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/:slug',
    name: 'singlebook',
    component: () => import('@/views/single-book.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/search:keyword?',
    name: 'search',
    component: () => import('@/views/Search.vue'),
    meta: {
      auth: true
    }
  },
  {
    path: '/categories:category?',
    name: 'category',
    component: () => import('@/views/Landing-Page.vue'),
    meta: {
      auth: true
    }
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
    meta: {
      auth: false
    }
  },
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

/*router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    if (!store.getters.isLogin) {
      console.log(2)
      next({ name: 'Login' })
    } else {
      console.log(3)
      next({ name: 'Landing' })
    }
  } else {
    console.log(3)
    next()
  }
})*/

export default router
