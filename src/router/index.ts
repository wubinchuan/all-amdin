import { firstenum } from '@/utils/maprouterchild'
import { createRouter, createWebHashHistory } from 'vue-router'

const useroute = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/login',
      component: () => import('../pages/login/niu-login.vue')
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('../pages/main/niu-main.vue')
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('../pages/not-found/NotFound.vue')
    }
  ]
})
useroute.beforeEach((to, from) => {
  const token = localStorage.getItem('token')

  if (to.path.startsWith('/main') && !token) {
    return '/login'
  }

  if (to.path === '/main' || to.path === '/main/') {
    return firstenum.url
  }
})

export default useroute
