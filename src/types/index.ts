/** 弹层页或详情页状态 */
export enum DetailsModelType {
  /** 新增 */
  add = 'add',
  /** 编辑 */
  editor = 'editor',
  /** 只读 */
  readOnly = 'readOnly',
}

/** 登录用户信息 */
export interface UserInfo {
  id?: string
  username?: string
  phone?: string
  email?: string
  sex?: string
  avatar?: string
  password?: string
}
