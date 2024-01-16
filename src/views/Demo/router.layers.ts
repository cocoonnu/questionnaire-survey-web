import type { ModelOptions } from '@/utils/layerOptions'
import { getModelDefaultOptions } from '@/utils/layerOptions'

export const layersPrefix = '@directory-specification'

export default [
  {
    ...getModelDefaultOptions({ hiddenHeaderAndFooter: true, enhancer: 'drawer' }),
    key: 'CreateGroupModal',
    getComponent: () => import('./layers/DemoLayer'),
    width: 580,
    maskClosable: false,
  },
] as ModelOptions
