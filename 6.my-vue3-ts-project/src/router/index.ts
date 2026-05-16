import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/lay-out.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 路由配置
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/foundation/customer',
      children: [
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
              component: () => import('../views/inventory-record/Stock-record/Stock-info.vue'),
              meta: {
                title: '入库记录',
              }
            },
            {
              path: 'outbound',
              name: 'Outbound',
              component: () => import('../views/inventory-record/Outbound-record/Outbound-info.vue'),
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
        // 收入管理
        {
          path: 'revenue',
          name: 'Revenue',
          meta: {
            title: '收入管理',
          },
          children: [
            {
              path: 'financial',
              name: 'Financial',
              component: () => import('../views/revenue-management/financial-review/Financial-info.vue'),
              meta: {
                title: '财务复核'
              }
            },
            {
              path: 'income',
              name: 'Income',
              component: () => import('../views/revenue-management/income-approval/Income-info.vue'),
              meta: {
                title: '收入审批'
              }
            }
          ]
        }
      ]
    }
  ]
})

// 全局路由守卫
router.beforeEach((to, from) => {
  NProgress.start()
  return true
})
router.afterEach(() => {
  NProgress.done()
})
export default router