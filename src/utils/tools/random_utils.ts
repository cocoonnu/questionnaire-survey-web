import { formatDate } from './date_utils'

/**
 * 生成随机字符串
 * @param {*} length
 * @param {*} chars
 */
export const randomString = (length = 4, chars = 'abcdefghijklmnopqrstuvwxyz') => {
  let result = ''
  // eslint-disable-next-line
  for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  return result
}

/**
 * 随机生成urlKey
 */
export const generateName = () => {
  const key = `${formatDate(new Date(), 'yyyyMMddhhmmss')}_${randomString(6)}`
  return key
}
