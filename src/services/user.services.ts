import request from '@/utils/request'

/** 发送验证码 */
export const sendCaptchaService = async (phone: string) => {
  const res = await request.post<boolean>('/user/sendCaptcha', {
    params: { phone },
  })
  return res
}

/** 用户密码登录 */
export const LoginByPasswordService = async (data: { phone: string; password: string }) => {
  const userId = await request.post<string>('/user/loginByPassword', { data })
  return userId
}

/** 用户验证码登录 */
export const LoginByCaptchaService = async (data: { phone: string; captcha: string }) => {
  const userId = await request.post<string>('/user/loginByCaptcha', {
    params: {
      phone: data.phone,
      captcha: data.captcha,
    },
  })
  return userId
}

/** 用户注册 */
export const registerService = async (data: {
  phone: string
  captcha: string
  password: string
}) => {
  const userId = await request.post<string>('/user/register', {
    params: {
      phone: data.phone,
      captcha: data.captcha,
      password: data.password,
    },
  })
  return userId
}
