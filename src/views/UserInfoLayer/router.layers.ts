import { modelDefaultOptions } from '@/consts'
import type { ModalProps } from 'antd'

const layerPrefix = '@UserInfo:'

export default [
  {
    ...modelDefaultOptions,
    width: 500,
    key: `${layerPrefix}UserInfoView`,
    getComponent: () => import('./components/UserInfoView'),
  },
  {
    ...modelDefaultOptions,
    title: '修改用户信息',
    width: 550,
    maskClosable: false,
    key: `${layerPrefix}UserInfoEdit`,
    getComponent: () => import('./components/UserInfoEdit'),
  },
] as ModalProps
