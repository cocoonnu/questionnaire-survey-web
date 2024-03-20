/** 随机生成字符串 */
export const generateRandomString = (n: number = 4): string => {
  const letters = 'abcdefghijklmnopqrstuvwxyz'
  let result = ''
  for (let i = 0; i < n; i++) {
    const randomIndex = Math.floor(Math.random() * letters.length)
    result += letters.charAt(randomIndex)
  }
  return result
}
