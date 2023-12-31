import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'home',
      component: ()=>import('@/views/public/HomeView.vue')
    },
    {
      path:'/login',
      name:'login',
      component: ()=>import('@/views/public/LoginView.vue')
    },
    {
      path:'/about',
      name:'about',
      component:()=>import('@/views/public/AboutView.vue')
    },
    {
      path:'/profile/:user',
      name:'home_user',
      component:()=>import('@/views/auth/user/HomeView.vue')
    }
  ]
})

export default router
