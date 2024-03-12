import React, { useEffect } from 'react'
import { app } from '@/utils/tools/app_utils'
import { EVENT_NAME } from '@/constants/eventListener'
import { useNavigate } from 'react-router-dom'

const GlobalWatchEvent = () => {
  const navigate = useNavigate()

  useEffect(() => {
    app.watch(EVENT_NAME.useNavigate, useNavigateListener)
    return () => {
      app.un(EVENT_NAME.useNavigate, useNavigateListener)
    }
  }, [])

  const useNavigateListener = (to, options) => {
    navigate(to, options)
  }

  return <></>
}

export default GlobalWatchEvent
