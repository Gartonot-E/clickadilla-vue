import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home'),
    meta: {
      title: 'Главная'
    }
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('@/views/Edit'),
    meta: {
      title: 'Редактировать'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
})

export default router
