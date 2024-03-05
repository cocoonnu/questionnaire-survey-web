import type { IRoutersData } from '@/routers/types'

export default [
  {
    path: '/app/systemHome',
    title: '小智问卷',
    component: () => import('@/views/SystemHome'),
  },
] as IRoutersData
