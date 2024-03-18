import { WORK_AREA_KEY } from '@/constants/menu'
import type { IRoutersData } from '@/routers/types'

export default [
  {
    path: `/app/${WORK_AREA_KEY.allQuestionnaire}`,
    title: '全部问卷 - 小智问卷',
    component: () => import('./index'),
  },
  {
    path: `/app/${WORK_AREA_KEY.starQuestionnaire}`,
    title: '星标问卷 - 小智问卷',
    component: () => import('./index'),
  },
] as IRoutersData
