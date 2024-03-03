import React from 'react'
import LoginLayout from './components/LoginLayout'
import { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperImg1 from '@/assets/images/anquanhegui.png'
import SwiperImg2 from '@/assets/images/bianjieyingyong.png'
import SwiperImg3 from '@/assets/images/yinshoujinshou.png'
import styles from './index.module.less'
import 'swiper/swiper.css'
import 'swiper/css/pagination'

const LoginRegister = () => {
  const swiperListData = [SwiperImg1, SwiperImg2, SwiperImg3]

  return (
    <div className={styles['login-register']}>
      <div className={styles['left-wrapper']}>
        <Swiper
          autoHeight
          navigation
          loop={true}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
        >
          {swiperListData?.map((item) => {
            return (
              <SwiperSlide key={item}>
                <div className={styles['slide-wrapper']}>
                  <img className={styles['slide-pic']} src={item} />
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      <div className={styles['right-wrapper']}>
        <LoginLayout />
      </div>
    </div>
  )
}

export default LoginRegister
