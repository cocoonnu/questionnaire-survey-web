import type { IRoutersData } from './types'

// 全局路由页面
const globalRouterList: IRoutersData = [
  // 示例页面
  // {
  //   path: '/demo/*', // 通过*去匹配多路径页面
  //   title: '页面标题',
  //   // redirect: '/', // 跳转指定页面
  //   // exact: true, // 路由是否绝对匹配
  //   component: () => import('@/views/demo'), // 声明此组件，将不判断是否显示h5/pc组件
  //   // componentPc: () => import('../views/demo'), // pc页面
  //   // componentH5: () => import('../views/demo'), // h5页面
  // },
  {
    path: '/',
    redirect: '/app/home',
  },
  {
    path: '/loginRegister',
    component: () => import('@/views/LoginRegister'),
  },
  {
    path: '/demo',
    component: () => import('@/views/Demo'),
  },
]

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
