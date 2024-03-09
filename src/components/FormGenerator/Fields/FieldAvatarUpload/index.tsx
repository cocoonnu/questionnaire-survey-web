import React, { useState } from 'react'
import ImgCrop from 'antd-img-crop'
import { message, Upload, Avatar } from 'antd'
import { LoadingOutlined, UserAddOutlined } from '@ant-design/icons'
import styles from './index.module.less'
import type { UploadChangeParam } from 'antd/es/upload'
import type { FormComponentItem } from '../../types/formType'
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface'

export type FieldAvatarUploadProps = FormComponentItem

const FieldAvatarUpload = ({ value, onChange }: FieldAvatarUploadProps) => {
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState<string>()

  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
    if (!isJpgOrPng) {
      message.error('只允许上传JPG/PNG格式文件')
    }
    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isLt2M) {
      message.error('图片大小必须小于2MB')
    }
    return isJpgOrPng && isLt2M
  }

  const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
    const getBase64 = (img: RcFile, callback: (url: string) => void) => {
      const reader = new FileReader()
      reader.addEventListener('load', () => callback(reader.result as string))
      reader.readAsDataURL(img)
    }

    if (info.file.status === 'error') {
      message.error('图片上传失败')
      return
    }

    if (info.file.status === 'uploading') {
      setLoading(true)
      return
    }

    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj as RcFile, (url) => {
        console.log('info....', info)
        const avatarUrl = info.file.response?.value || ''
        onChange?.(avatarUrl)
        setLoading(false)
        setImageUrl(url)
      })
    }
  }

  return (
    <div className={styles['avatar-upload']}>
      <ImgCrop aspectSlider rotationSlider>
        <Upload
          name="avatar" // 传输的文件对象名称，和后端接口对应
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          action="/api/userInfo/avatarUpload"
          beforeUpload={beforeUpload}
          onChange={handleChange}
        >
          <Avatar src={imageUrl} icon={loading ? <LoadingOutlined /> : <UserAddOutlined />} />
        </Upload>
      </ImgCrop>
    </div>
  )
}

export default FieldAvatarUpload
