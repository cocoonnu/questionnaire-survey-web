import 'regenerator-runtime/runtime'
import React from 'react'
import App from './App'
import { createRoot } from 'react-dom/client'
import { reportWebVitals } from './reportWebVitals'

const container = document.getElementById('root') as Element
const root = createRoot(container)
root.render(<App />)

reportWebVitals(console.info)
