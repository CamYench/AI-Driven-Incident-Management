"use client"

import { useState, useEffect } from "react"

export default function LiveBadge() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed top-24 right-6 z-40 flex items-center space-x-2 bg-[#1E2526] px-3 py-1 rounded-full shadow-lg">
      <div className={`h-2 w-2 rounded-full ${isVisible ? "bg-green-500" : "bg-transparent"}`}></div>
      <span className="text-[#00C4B4] text-xs font-medium">LIVE</span>
    </div>
  )
}
