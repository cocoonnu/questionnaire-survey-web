import type { IRoutersData } from '@/routers/types'

export default [
  {
    path: '/app/allQuestionnaire',
    component: () => import('./index'),
  },
] as IRoutersData
