import { modelDefaultOptions } from '@/consts'
import type { ModalProps } from 'antd'

export default [
  {
    ...modelDefaultOptions,
    width: 380,
    footer: null,
    key: 'CommonSlideToUnlock',
    getComponent: () => import('./SlideToUnlock'),
  },
] as ModalProps
