export const currentEnv = process.env.FIG_ENV || 'prod'

export const webVersion = process.env.WEB_VERSION || ''

const ctext = currentEnv !== 'prod' ? `电档系统${currentEnv}` : '电档系统'

// 不要删除，用来识别当前项目环境
console.info(
  `\n %c ${ctext} %c https://xxx.com \n`,
  'color: #fff; background: #03a8e8; padding:5px 0; font-size:12px;font-weight: bold;',
  'background: #03a8e8; padding:5px 0; font-size:12px;',
)

export const isDevEnv = currentEnv === 'dev'
export const isTestEnv = currentEnv === 'test'
export const isPreEnv = currentEnv === 'pre'
export const isProdEnv = currentEnv === 'prod'

// 请求接口base
export const CMS_BASEURL = {
  dev: 'https://consoletest.k.com',
  test: 'https://consoletest.k.com',
  pre: 'https://consolepre.k.com',
  prod: 'https://console.k.com',
}[currentEnv]

// token cookie的key
export const TOKEN_COOKIE_NAME = {
  dev: 'corgi-token-test-data',
  test: 'corgi-token-test-data',
  pre: 'corgi-token-pre-data',
  prod: 'corgi-token-prod-data',
}[currentEnv]

// // corgi中心登录passportUrl
// export const CORGI_PASSPORT_URL = {
//   dev: 'https://testcorgilogin.k.com',
//   test: 'https://testcorgilogin.k.com',
//   pre: 'https://pre-corgilogin.k.com',
//   prod: 'https://corgilogin.k.com',
// }[currentEnv]

// /** 跳转登录页面 */
// export const CORGI_LOGIN_URL = `${CORGI_PASSPORT_URL}/#/login?redirect=${encodeURIComponent(
//   window.location.href,
// )}`
