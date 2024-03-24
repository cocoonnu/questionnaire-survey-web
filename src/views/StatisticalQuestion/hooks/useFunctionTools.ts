/**
 * 计算给定字符串中每个词出现的次数
 * @param str 字符串
 * @param separator 分隔符，默认为逗号
 * @returns 词组映射{ 选项2: 1, 选项3: 2, 选项1: 1 }
 */
export const getStringCountMap = (str: string, separator: string = ',') => {
  const stringArray = str.split(separator)
  const stringCountMap = {}

  // 遍历数组，统计每个词的出现次数
  stringArray.forEach((word) => {
    const trimmedWord = word.trim() // 去除首尾空格
    stringCountMap[trimmedWord] = (stringCountMap[trimmedWord] || 0) + 1
  })

  return stringCountMap
}

/** 将多个词组映射拼接成一个 */
export const mergeStringCountMaps = (stringCountMaps) => {
  const result = {}
  stringCountMaps.forEach((obj) => {
    Object.keys(obj).forEach((key) => {
      if (result.hasOwnProperty(key)) {
        result[key] += obj[key]
      } else {
        result[key] = obj[key]
      }
    })
  })
  return result
}
