import type { IRoutersData } from '@/routers/types'

export default [
  {
    path: '/app/systemHome',
    component: () => import('@/views/SystemHome'),
  },
] as IRoutersData
