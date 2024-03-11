import { createRoot } from 'react-dom/client'
import React from 'react'
import './assets/css/main.css'
import { App } from './App'

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
