import { WORK_AREA_KEY } from '@/constants/menu'
import type { IRoutersData } from '@/routers/types'

export default [
  {
    path: `/app/${WORK_AREA_KEY.recycleBin}`,
    title: '回收站 - 小智问卷',
    component: () => import('./index'),
  },
] as IRoutersData
