import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'
import { CMS_BASEURL } from '../consts/env'
import { HTTP_STATUS } from '../consts/statusCode'
import logUtils from './tools/log_utils'
import { message } from 'antd'

const axiosInstance = axios.create({
  // baseURL: CMS_BASEURL,
  timeout: 50000,
  headers: { 'Content-Type': 'application/json' },
})

// 中间件 拦截请求-
axiosInstance.interceptors.request.use(
  (config) => {
    const newConfig = config
    if (!newConfig.headers) {
      newConfig.headers = {} as any
    }
    // newConfig.headers.Authorization = `bearer ${crogiToken}`

    return newConfig
  },
  (err) => {
    return Promise.reject(err)
  },
)

axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (err) => {
    logUtils.error(err)
    if (!err.response) {
      return Promise.reject(err)
    }
    const res = err.response
    if (res?.status === HTTP_STATUS.AUTHENTICATE) {
      // window.location.href = `${CORGI_PASSPORT_URL}/#/login?redirect=${encodeURIComponent(
      //   window.location.href,
      // )}`
      return Promise.reject(err)
    }
    if (res?.data?.message) {
      message.error(`${res?.data?.message}`)
    }
    return Promise.reject(err)
  },
)

const safeRequest = <T>(url: string, options?: AxiosRequestConfig): Promise<T> => {
  return new Promise((resolve, reject) => {
    axiosInstance({
      method: 'GET',
      ...options,
      url,
    }).then(
      (res) => {
        if (res) {
          resolve(res.data)
        } else {
          reject(res)
        }
      },
      (err) => {
        reject(err)
      },
    )
  })
}

/**
 * get
 * @param url
 * @param opts
 * @returns {Promise}
 */
const get = <T>(url: string, opts?: AxiosRequestConfig): Promise<T> => {
  return safeRequest<T>(url, opts)
}

/**
 * post
 * @param url
 * @param opts
 * @returns {Promise}
 */
const post = <T>(url: string, opts?: AxiosRequestConfig): Promise<T> => {
  return safeRequest<T>(url, {
    ...opts,
    method: 'POST',
  })
}

/**
 * put
 * @param url
 * @param opts
 * @returns {Promise}
 */
const put = <T>(url: string, opts?: AxiosRequestConfig): Promise<T> => {
  return safeRequest<T>(url, {
    ...opts,
    method: 'PUT',
  })
}

/**
 * del
 * @param url
 * @param opts
 * @returns {Promise}
 */
const del = <T>(url: string, opts?: AxiosRequestConfig): Promise<T> => {
  return safeRequest<T>(url, {
    ...opts,
    method: 'DELETE',
  })
}

const request = {
  get,
  post,
  put,
  del,
}
export default request
