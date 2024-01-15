import MessageCenter from '@ekuaibao/messagecenter'

class AppContext extends MessageCenter {
  open<T>(key: string, props?: any, ...params: any[]): Promise<T> {
    return this.invoke('@@:open:layer', key, props, ...params)
  }

  close(...params: any[]) {
    return this.invoke('@@:close:layer', ...params)
  }
}

const app = new AppContext()
export { app }
