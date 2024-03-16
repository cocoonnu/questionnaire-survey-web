import type { IRoutersData } from './types'

/** 全局路由页面 */
const globalRouterList: IRoutersData = [
  {
    path: '/',
    redirect: '/app/allQuestionnaire',
  },
  {
    path: '/loginRegister',
    component: () => import('@/views/LoginRegister'),
  },
  {
    path: '/editQuestion/:questionId?',
    component: () => import('@/views/EditQuestion'),
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
