import MessageCenter from '@ekuaibao/messagecenter'
import { EVENT_NAME } from '@/consts/eventListener'

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
