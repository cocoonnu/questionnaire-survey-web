import MessageCenter from '@ekuaibao/messagecenter'
import { EVENT_NAME } from '@/consts/eventListener'

/**
 * 全局发布订阅工具类
 * @emit 触发监听事件
 * @invoke 异步触发监听事件
 * @open 打开弹窗
 * @close 关闭弹窗
 */
class AppContext extends MessageCenter {
  open<T>(key: string, props?: any, ...params: any[]): Promise<T> {
    return this.invoke(EVENT_NAME['@@:open:layer'], key, props, ...params)
  }

  close(...params: any[]) {
    return this.invoke(EVENT_NAME['@@:close:layer'], ...params)
  }
}

const app = new AppContext()
export { app }
