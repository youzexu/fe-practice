import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/lay-out.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/customer',
      children: [
        {
          path: 'customer',
          name: 'Customer',
          component: () => import('../views/Basic-information/Customer-Management/Customer-Info.vue'),
          meta: {
            title: '客户管理',
          }
        },
        {
          path: 'supplier',
          name: 'Supplier',
          component: () => import('../views/Basic-information/Supplier-Info.vue'),
          meta: {
            title: '供应商管理',
          }
        },
        {
          path: 'team',
          name: 'Team',
          component: () => import('../views/Basic-information/Team-Info.vue'),
          meta: {
            title: '团队管理',
          }
        }
      ]
    }
  ]
})

export default router