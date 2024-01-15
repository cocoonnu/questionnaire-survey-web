import { isDevEnv } from '@/consts/env'

class LogUtils {
  /**
   * log打印输出，常规模式
   */
  static log(message?: any, ...optionalParams: any[]) {
    if (isDevEnv) {
      // eslint-disable-next-line
      console.log(message, ...optionalParams)
    }
  }

  /**
   * 日志警告模式输出
   */
  static warn(message?: any, ...optionalParams: any[]) {
    console.warn(message, ...optionalParams)
  }

  /**
   * 日志error模式输出
   */
  static error(message?: any, ...optionalParams: any[]) {
    console.error(message, ...optionalParams)
  }
}
export default LogUtils
