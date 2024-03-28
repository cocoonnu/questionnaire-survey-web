import { TEMPLATE_KEY } from '@/constants/menu'
import votingTemplateImg from '@/assets/images/votingTemplateImg.png'
import onlineExaminationImg from '@/assets/images/onlineExaminationImg.png'
import questionnaireSurveyImg from '@/assets/images/questionnaireSurveyImg.png'
import questionnaireSurveyBgd from '@/assets/images/questionnaireSurveyBgd.png'
import onlineExaminationBgd from '@/assets/images/onlineExaminationBgd.png'
import votingTemplateBgd from '@/assets/images/votingTemplateBgd.png'

/** 通过不同问卷模板类型获取封面 */
export const getTemplateCover = (templateType: TEMPLATE_KEY) => {
  switch (templateType) {
    case TEMPLATE_KEY.questionnaireSurvey:
      return `url(${questionnaireSurveyImg})`
    case TEMPLATE_KEY.onlineExamination:
      return `url(${onlineExaminationImg})`
    case TEMPLATE_KEY.votingTemplate:
      return `url(${votingTemplateImg})`
    default:
      return `url(${questionnaireSurveyImg})`
  }
}

/** 通过不同问卷模板类型获取答卷背景 */
export const getTemplateBgd = (templateType: TEMPLATE_KEY) => {
  switch (templateType) {
    case TEMPLATE_KEY.questionnaireSurvey:
      return questionnaireSurveyBgd
    case TEMPLATE_KEY.onlineExamination:
      return onlineExaminationBgd
    case TEMPLATE_KEY.votingTemplate:
      return votingTemplateBgd
    default:
      return questionnaireSurveyBgd
  }
}
