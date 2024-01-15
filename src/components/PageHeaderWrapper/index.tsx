import React, { useEffect, useState } from 'react'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router-dom'
import MENUS from '../../consts/menus'
import { routerMenuMap } from '../../consts/breadcrumbPath'

interface PageHeaderWrapperProps {
  path: string;
  children?: any;
}

interface IBcData {
  path: string;
  name: string;
  childMenu?: any;
}

interface GetNodePathProps {
  data: IBcData[];
  id: number;
  array?: IBcData[];
  matchPath?: string;
  matchChildren?: string;
  matchData?: (mdata: IBcData) => any;
}

/* 导航组件，path当前路由完整path
<PageHeaderWrapper path={'/app/home'}>
  <div className={styles.content_box}>
    ✌️化繁为简🏆
  </div>
</PageHeaderWrapper>
*/
const PageHeaderWrapper = ({ children, path }: PageHeaderWrapperProps) => {
  const [bcData, setBcData] = useState<IBcData[]>([])

  useEffect(() => {
    if (!path) return
    const getNodePath = ({
      data = [],
      id,
      array,
      matchPath = 'path',
      matchChildren = 'childMenu',
      matchData,
    }: GetNodePathProps) => {
      const arr = Array.from(array || [])
      for (let i = 0; i < data?.length; i++) {
        arr.push(matchData ? matchData(data[i]) : data[i])

        if (data[i][matchPath] === id && id !== undefined) {
          return arr
        }
        const itemChildren = data[i][matchChildren]
        if (itemChildren?.length) {
          const result = getNodePath({
            data: itemChildren,
            id,
            array: arr,
            matchPath,
            matchChildren,
            matchData,
          })
          if (result) return result
        }
        arr.pop()
      }
      return []
    }
    const pageData = routerMenuMap[path]
    const selectData = getNodePath({
      data: MENUS,
      id: pageData?.parentPath || pageData?.path || path,
      matchData: (mdata) => ({
        name: mdata?.name,
        path: mdata?.path,
      }),
    })

    // 父级菜单情况
    if (pageData?.parentPath) {
      selectData.push({
        name: pageData?.name,
      })
    } else if (selectData?.length > 0) {
      // 最后一页去链接
      const last = selectData.pop()
      selectData.push({
        name: last?.name,
      })
    } else if (!pageData?.parentPath && selectData?.length === 0) {
      // 无菜单关联父级
      selectData.push({
        name: pageData?.name,
      })
    }
    setBcData([{ name: '首页', path: '/' }, ...selectData])
  }, [path])

  return (
    <div>
      <Breadcrumb style={{ margin: '12px 0 0 16px' }}>
        {bcData?.map((item) => {
          return (
            <Breadcrumb.Item key={`${item.name}${item.path}`}>
              {item.path ? <Link to={item.path}>{item.name}</Link> : item.name}
            </Breadcrumb.Item>
          )
        })}
      </Breadcrumb>
      {children}
    </div>
  )
}
export default PageHeaderWrapper
