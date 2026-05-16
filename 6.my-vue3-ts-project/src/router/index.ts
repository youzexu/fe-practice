import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/lay-out.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/foundation/customer',
      children: [
        // 库存信息路由
        {
          path: 'inventory',
          name: 'Inventory',
          meta: {
            title: '库存管理',
          },
          children: [
            {
              path: 'warehousing',
              name: 'Warehousing',
              component: () => import('../views/inventory-record/Stock-record/stock-info.vue'),
              meta: {
                title: '入库记录',
              }
            },
            {
              path: 'outbound',
              name: 'Outbound',
              component: () => import('../views/inventory-record/Outbound-record/outbound-info.vue'),
              meta: {
                title: '出库记录',
              }
            },
            {
              path: 'transformation',
              name: 'Transformation',
              component: () => import('../views/inventory-record/Conversion-record/Conversion-info.vue'),
              meta: {
                title: '转换记录',
              }
            }
          ]
        },
        // 基础信息路由
        {
          path: 'foundation',
          name: 'Foundation',
          meta: {
            title: '基础信息',
          },
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
              component: () => import('../views/Basic-information/Supplier-management/Supplier-Info.vue'),
              meta: {
                title: '供应商管理',
              }
            },
            {
              path: 'team',
              name: 'Team',
              component: () => import('../views/Basic-information/Team-management/Team-Info.vue'),
              meta: {
                title: '团队管理',
              }
            }
          ]
        },
      ]
    }
  ]
})

export default router