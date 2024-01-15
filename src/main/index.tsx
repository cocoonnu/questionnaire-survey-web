import 'regenerator-runtime/runtime'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { reportWebVitals } from './reportWebVitals'
import { ConfigTheme } from '@hose/eui-theme'

const theme = new ConfigTheme()
theme.config({ prefix: 'eui', platform: 'eui' })

const container = document.getElementById('root') as Element
const root = createRoot(container)
root.render(<App />)

reportWebVitals(console.info)
