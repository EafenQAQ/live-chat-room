import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from '@/views/WelcomePage.vue'
import { projectAuth } from '@/firebase/config'

const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  console.log('The Guard:current user data is :', user)
  if (!user) {
    next({ name: 'welcome' })
  } else {
    next()
  }

}

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
      beforeEnter: requireAuth,
    },
  ],
})

export default router
