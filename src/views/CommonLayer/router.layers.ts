import { modelDefaultOptions } from '@/consts'
import type { ModalProps } from 'antd'

const layerPrefix = '@Common:'

export default [
  {
    ...modelDefaultOptions,
    width: 380,
    footer: null,
    key: `${layerPrefix}SlideToUnlock`,
    getComponent: () => import('./SlideToUnlock'),
  },
] as ModalProps
