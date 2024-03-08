import React, { useState } from 'react'
import ImgCrop from 'antd-img-crop'
import { message, Upload, Avatar } from 'antd'
import { LoadingOutlined, UserAddOutlined } from '@ant-design/icons'
import styles from './index.module.less'
import type { UploadChangeParam } from 'antd/es/upload'
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface'

const FieldAvatarUpload = () => {
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState<string>()

  const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!')
    }
    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!')
    }
    return isJpgOrPng && isLt2M
  }

  const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
    const getBase64 = (img: RcFile, callback: (url: string) => void) => {
      const reader = new FileReader()
      reader.addEventListener('load', () => callback(reader.result as string))
      reader.readAsDataURL(img)
    }

    if (info.file.status === 'uploading') {
      setLoading(true)
      return
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setLoading(false)
        setImageUrl(url)
      })
    }
  }

  return (
    <div className={styles['avatar-upload']}>
      <ImgCrop showReset aspectSlider rotationSlider>
        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
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
