import queryString from 'query-string'

/**
 * 获取search里的query参数
 */
export function getSearchQuery(key: string | number) {
  const str = window.location.search
  const res = queryString.parse(str)
  return key ? res[key] : res
}

/**
 * 获取hash里的query参数
 */
export function getHashQuery(key?: string): any {
  try {
    const str = window.location.hash.split('?')
    const res = queryString.parse(str[1])
    return key ? res[key] : res
  } catch (error) {
    return ''
  }
}

/**
 * 转换的query参数为?name=hh 字符串
 */
export function stringifyQuery(data: any | undefined) {
  return data ? queryString.stringify(data) : data
}

/**
 * 隐藏手机号中间4位
 */
export function formatPhone(phone: string) {
  return phone.replace(/(\d{3})\d*(\d{4})/g, '$1***$2')
}

/**
 * 隐藏身份证号中11位
 */
export function formatIdentity(number: string) {
  return number.replace(/(\d{3})\d*(\d{4})/g, '$1***********$2')
}

/**
 * 首字母小写
 * @param {String} str 字符串
 */
 export const firstCharToLocaleLowerCase = (str?: string) => {
  if (!str) return ''
  return str.slice(0, 1).toLocaleLowerCase() + str.slice(1)
}

/**
 * 找出两个对象中重复的 key 集合
 * @param {Object} obj1 对象1
 * @param {Object} obj2 对象2
 * @returns string[]
 */
export const findRepeatField = (obj1: Record<any, any>, obj2: Record<any, any>) => {
  // 默认 obj1 比 obj2 的属性多
  let manyModelKey = Object.keys(obj1)
  let lessModelKey = Object.keys(obj2)

  // 如果 obj2 多则交换
  if (lessModelKey.length > manyModelKey.length) {
    const cache = manyModelKey
    manyModelKey = lessModelKey
    lessModelKey = cache
  }

  return lessModelKey.filter((key) => manyModelKey.includes(key))
}
