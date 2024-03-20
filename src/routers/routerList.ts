import type { IRoutersData } from './types'

/** 全局路由页面 */
const globalRouterList: IRoutersData = [
  {
    path: '/',
    redirect: '/app/allQuestionnaire',
  },
  {
    path: '/loginRegister',
    title: '登录注册 - 小智问卷',
    component: () => import('@/views/LoginRegister'),
  },
  {
    path: '/editQuestion/:questionId?',
    title: '问卷编辑器 - 小智问卷',
    component: () => import('@/views/EditQuestion'),
  },
  {
    path: '/answerForm/:questionId?',
    title: '小智问卷',
    component: () => import('@/views/AnswerForm'),
  },
]

/** layout路由页面 */
const files = require.context('../views', true, /(router|router.layers)\.(js|ts)$/)
const routerList: IRoutersData = []
const routerLayerList: IRoutersData = []

files.keys().forEach((key) => {
  const child = files(key).default
  if (/router.layers/g.test(key)) {
    routerLayerList.push(...child)
    return
  }
  routerList.push(...child)
})

export { routerList, globalRouterList, routerLayerList }
