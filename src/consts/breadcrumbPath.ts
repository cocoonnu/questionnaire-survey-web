import { routerList } from '../routers/routerList'

// 导航栏数据
export const menuDatas = {
  ...routerList?.reduce((preValues, curValue) => {
    const newValues = preValues
    if (curValue.name) newValues[curValue.name] = curValue.path
    return newValues
  }, {}),
}

// 路由菜单映射
export const routerMenuMap = {
  ...routerList?.reduce((preValues, curValue) => {
    const newValues = preValues
    if (curValue.path) newValues[curValue.path] = curValue
    return newValues
  }, {}),
}

// 获取导航path数据
export const getMeunPath = (name) => {
  const selectData = menuDatas[name]

  if (selectData) {
    return {
      name,
      path: selectData,
    }
  }
  return { name }
}
