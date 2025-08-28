import React from 'react'
import NextecAsiaLanding from './components/NextecAsiaLanding'
import './i18n' // Import i18n configuration
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="App">
      <NextecAsiaLanding />
      {/* Vercel Speed Insights - Automatically tracks Core Web Vitals and performance metrics */}
      <SpeedInsights />
      {/* Vercel Analytics - Tracks page views, user interactions, and custom events */}
      <Analytics />
    </div>
  )
}

export default App
