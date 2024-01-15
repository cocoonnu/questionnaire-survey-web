import type { IRoutersData } from '@/routers/types'

export default [
  {
    path: '/app/demo?/:id',
    title: 'demo页',
    component: () => import('@/views/Demo'),
  },
  {
    path: '/app/home',
    component: () => import('@/views/Home'),
  },
] as IRoutersData
