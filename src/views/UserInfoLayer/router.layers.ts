import { modelDefaultOptions } from '@/consts'
import type { ModalProps } from 'antd'

const layerPrefix = '@UserInfo:'

export default [
  {
    ...modelDefaultOptions,
    width: 450,
    footer: null,
    key: `${layerPrefix}UserInfoView`,
    getComponent: () => import('./UserInfoView'),
  },
] as ModalProps
