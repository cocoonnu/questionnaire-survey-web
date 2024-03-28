import { TEMPLATE_KEY, TEMPLATE_LABEL } from '@/constants/menu'
import type { IRoutersData } from '@/routers/types'

export default [
  {
    path: `/app/${TEMPLATE_KEY.questionnaireSurvey}`,
    title: `${TEMPLATE_LABEL.questionnaireSurvey}模板 - 小智问卷`,
    component: () => import('./index'),
  },
  {
    path: `/app/${TEMPLATE_KEY.onlineExamination}`,
    title: `${TEMPLATE_LABEL.onlineExamination}模板 - 小智问卷`,
    component: () => import('./index'),
  },
  {
    path: `/app/${TEMPLATE_KEY.votingTemplate}`,
    title: `${TEMPLATE_LABEL.votingTemplate}模板 - 小智问卷`,
    component: () => import('./index'),
  },
] as IRoutersData
