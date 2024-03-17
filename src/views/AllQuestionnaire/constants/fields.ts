import { FORM_TYPE } from '@/components/FormGenerator/types/formType'
import { TEMPLATE_KEY, TEMPLATE_LABEL } from '@/constants/menu'
import type { FormComponentsProps } from '@/components/FormGenerator/types/formType'

export const formComponents: FormComponentsProps[] = [
  {
    type: FORM_TYPE.input,
    label: '问卷名称',
    field: 'name',
    optional: true,
  },
  {
    type: FORM_TYPE.select,
    label: '发布状态',
    field: 'isPublished',
    style: { width: 200 },
    options: [
      { label: '已发布', value: 1 },
      { label: '未发布', value: 0 },
    ],
    optional: true,
  },
  {
    type: FORM_TYPE.select,
    label: '问卷模板',
    field: 'template',
    style: { width: 200 },
    options: [
      { label: TEMPLATE_LABEL.onlineExamination, value: TEMPLATE_KEY.onlineExamination },
      {
        label: TEMPLATE_LABEL.questionnaireSurvey,
        value: TEMPLATE_KEY.questionnaireSurvey,
      },
      { label: TEMPLATE_LABEL.votingTemplate, value: TEMPLATE_KEY.votingTemplate },
    ],
    optional: true,
  },
]
