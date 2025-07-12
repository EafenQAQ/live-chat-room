import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from '@/views/WelcomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: WelcomePage,
    },
    {
      path: '/chatroom',
      name: 'chatroom',
      component: () => import('../views/ChatroomPage.vue'),
    },
  ],
})

export default router
