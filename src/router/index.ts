import { createRouter, createWebHistory } from 'vue-router'
import Repositories from '../views/Repositories.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Repositories',
      component: Repositories,
    },
  ],
})

export default router
