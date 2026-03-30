import { createRouter, createWebHistory } from 'vue-router'
import { getToken } from '../utils/auth.js'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: () => import('../views/Login.vue'), meta: { showTabbar: false } },
  { path: '/register', component: () => import('../views/Register.vue'), meta: { showTabbar: false } },
  {
    path: '/dashboard',
    component: () => import('../views/Dashboard.vue'),
    meta: { requiresAuth: true, showTabbar: true }
  },
  {
    path: '/product',
    component: () => import('../views/Product.vue'),
    meta: { requiresAuth: true, showTabbar: true }
  },
  {
    path: '/inventory',
    component: () => import('../views/Inventory.vue'),
    meta: { requiresAuth: true, showTabbar: true }
  },
  {
    path: '/shopping',
    component: () => import('../views/Shopping.vue'),
    meta: { requiresAuth: true, showTabbar: true }
  },
  {
    path: '/profile',
    component: () => import('../views/Profile.vue'),
    meta: { requiresAuth: true, showTabbar: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const token = getToken()
  if (to.meta.requiresAuth && !token) {
    next('/login')
  } else {
    next()
  }
})

export default router