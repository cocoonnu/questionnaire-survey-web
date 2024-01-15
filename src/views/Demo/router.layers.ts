import type { ModelOptions } from '@/utils/layerOptions'
import { getModelDefaultOptions } from '@/utils/layerOptions'

export const layersPrefix = '@directory-specification'

export default [
  {
    ...getModelDefaultOptions(),
    key: 'CreateGroupModal',
    getComponent: () => import('./layers/DemoLayer'),
    enhancer: 'modal',
    enhancerOptions: { title: '新建分组' },
    width: 580,
    maskClosable: false,
  },
] as ModelOptions
