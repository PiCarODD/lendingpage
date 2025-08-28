import React from 'react'
import NextecAsiaLanding from './components/NextecAsiaLanding'
import './i18n' // Import i18n configuration
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <div className="App">
      <NextecAsiaLanding />
      {/* Vercel Speed Insights - Automatically tracks Core Web Vitals and performance metrics */}
      <SpeedInsights />
    </div>
  )
}

export default App
