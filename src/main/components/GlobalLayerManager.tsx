import React from 'react'
import type { ILayerManagerProps } from '@ekd/enhance-layer-manager'
import { EnhanceLayerManager } from '@ekd/enhance-layer-manager'
import { routerLayerList } from '@/routers/routerList'
import { app } from '@/utils/tools/app_utils'
import { EVENT_NAME } from '@/consts/eventListener'

@EnhanceLayerManager((props) => props.layers)
class LayerManager extends React.Component<ILayerManagerProps & { layers: any }> {
  componentDidMount() {
    app.watch(EVENT_NAME['@@:open:layer'], this.handleOpenLayer)
    app.watch(EVENT_NAME['@@:close:layer'], this.handleCloseLayer)
  }

  componentWillUnmount() {
    app.un(EVENT_NAME['@@:open:layer'], this.handleOpenLayer)
    app.un(EVENT_NAME['@@:close:layer'], this.handleCloseLayer)
  }

  handleOpenLayer = (key: string, props: any, isSingle?: boolean) => {
    const { layerManager } = this.props
    return isSingle ? layerManager?.open(key, props) : layerManager?.push(key, props)
  }

  handleCloseLayer = () => {
    const { layerManager } = this.props
    layerManager?.close()
  }

  render() {
    return <></>
  }
}

const GlobalLayerManager = () => {
  return <LayerManager layers={routerLayerList} />
}

export default GlobalLayerManager
