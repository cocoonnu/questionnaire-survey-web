import axios from 'axios'
import { message } from 'antd'
import { HTTP_STATUS, COMMON_STATUS } from '../constants/statusCode'
import type { AxiosRequestConfig } from 'axios'

const axiosInstance = axios.create({
  baseURL: 'api/',
  timeout: 50000,
  headers: { 'Content-Type': 'application/json' },
})

axiosInstance.interceptors.request.use(
  (config) => {
    const newConfig = config
    if (!newConfig.headers) newConfig.headers = {} as any
    // newConfig.headers.Authorization = `bearer ...`
    return newConfig
  },
  (err) => {
    return Promise.reject(err)
  },
)

axiosInstance.interceptors.response.use(
  (response) => {
    // 接口响应成功的统一处理，输出错误信息、登录权限拦截等
    const responseData = response.data || {}
    if (responseData.errMsg) message.error(responseData.errMsg)
    if (responseData.code === COMMON_STATUS.NOT_LOGIN) {
      window.location.replace(`${window.location.origin}/#/loginRegister`)
      window.document.title = '登录注册 - 小智问卷'
    }
    return response
  },
  (err) => {
    // 接口响应失败的统一处理，输出http常见的几个响应错误场景
    console.error(err)
    const errResponse = err?.response || {}
    switch (errResponse.status) {
      case HTTP_STATUS.BAD_GATEWAY:
        message.error('请求方式错误')
        break
      case HTTP_STATUS.NOT_FOUND:
        message.error('请求地址不存在')
        break
      default:
        message.error('系统接口异常')
        break
    }
    return Promise.reject(err)
  },
)

const safeRequest = <T>(url: string, options?: AxiosRequestConfig): Promise<T> => {
  return new Promise((resolve, reject) => {
    axiosInstance({ method: 'GET', ...options, url }).then(
      (res) => {
        resolve(res.data.value)
      },
      (err) => {
        reject(err)
      },
    )
  })
}

const get = <T>(url: string, opts?: AxiosRequestConfig): Promise<T> => {
  return safeRequest<T>(url, opts)
}

const post = <T>(url: string, opts?: AxiosRequestConfig): Promise<T> => {
  return safeRequest<T>(url, {
    ...opts,
    method: 'POST',
  })
}

const put = <T>(url: string, opts?: AxiosRequestConfig): Promise<T> => {
  return safeRequest<T>(url, {
    ...opts,
    method: 'PUT',
  })
}

const del = <T>(url: string, opts?: AxiosRequestConfig): Promise<T> => {
  return safeRequest<T>(url, {
    ...opts,
    method: 'DELETE',
  })
}

/**
 * 统一封装的请求实例
 * @see https://axios-http.com/zh/docs/req_config
 */
const request = { get, post, put, del }
export default request
