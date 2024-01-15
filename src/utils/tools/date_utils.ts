import moment from 'moment'

/**
 * 时间处理，返回指定格式
 */
export const formatDate = (dateTime: Date, fmt: string) => {
  if (!dateTime) return '' // 传入参数不存在时退出
  const o = {
    'M+': dateTime.getMonth() + 1, // 月份
    'd+': dateTime.getDate(), // 日
    'h+': dateTime.getHours(), // 小时
    'm+': dateTime.getMinutes(), // 分
    's+': dateTime.getSeconds(), // 秒
    'q+': Math.floor((dateTime.getMonth() + 3) / 3), // 季度
    S: dateTime.getMilliseconds(), // 毫秒
  }
  let newDataStrin = fmt || 'yyyy-MM-dd hh:mm:ss.S'
  if (/(y+)/.test(newDataStrin)) {
    newDataStrin = newDataStrin.replace(
      RegExp.$1,
      `${dateTime.getFullYear()}`.substr(4 - RegExp.$1.length),
    )
  }
  // eslint-disable-next-line
  for (const k in o) {
    if (new RegExp(`(${k})`).test(newDataStrin)) {
      newDataStrin = newDataStrin.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : `00${o[k]}`.substr(`${o[k]}`.length),
      )
    }
  }
  return newDataStrin
}

/**
 * 格式化日期格式，返回时间日期字符串，支持时间戳或是mement对象
 */
export const formatYearMonth = (value, pattern = 'YYYY-MM'): string => {
  if (!value) {
    if (typeof value === 'string') {
      return '-'
    }
    return value ?? '-'
  }
  let res = moment.isMoment(value) ? value : moment(+value)
  if (!res.isValid()) {
    res = moment(+value)
  }
  return res?.format(pattern)
}
