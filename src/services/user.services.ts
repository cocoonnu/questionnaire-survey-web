import request from '@/utils/request'

export const sendCaptchaService = async (phone: string) => {
  const res = await request.post<boolean>('/user/sendCaptcha', {
    params: { phone },
  })
  return res
}
