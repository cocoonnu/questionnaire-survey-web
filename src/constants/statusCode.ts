/**
 * HTTP常见状态码
 * @see https://tsejx.github.io/javascript-guidebook/computer-networks/http/http-status-code
 */
export const HTTP_STATUS = {
  SUCCESS: 200,
  NOT_MODIFIED: 304,
  CLIENT_ERROR: 400,
  AUTHENTICATE: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
}

/** 后端接口数据状态码 */
export const COMMON_STATUS = {
  SUCCESS: 'success',
  ERROR: 'error',
  NOT_LOGIN: 'notLogin',
}
