"use client"

import { type ReactNode, useState, useRef, useEffect } from "react"
import { createPortal } from "react-dom"

interface TooltipProps {
  content: ReactNode
  children: ReactNode
  position?: "top" | "bottom" | "left" | "right"
}

export default function Tooltip({ content, children, position = "top" }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)
  const triggerRef = useRef<HTMLDivElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 })

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  useEffect(() => {
    if (isVisible && triggerRef.current && mounted) {
      const updatePosition = () => {
        if (!triggerRef.current || !tooltipRef.current) return

        const triggerRect = triggerRef.current.getBoundingClientRect()
        const tooltipRect = tooltipRef.current.getBoundingClientRect()

        let top = 0
        let left = 0

        switch (position) {
          case "top":
            top = triggerRect.top - tooltipRect.height - 8
            left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2
            break
          case "bottom":
            top = triggerRect.bottom + 8
            left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2
            break
          case "left":
            top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2
            left = triggerRect.left - tooltipRect.width - 8
            break
          case "right":
            top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2
            left = triggerRect.right + 8
            break
        }

        // Keep tooltip within viewport bounds
        const viewportWidth = window.innerWidth
        const viewportHeight = window.innerHeight

        if (left < 8) left = 8
        if (left + tooltipRect.width > viewportWidth - 8) {
          left = viewportWidth - tooltipRect.width - 8
        }
        if (top < 8) top = 8
        if (top + tooltipRect.height > viewportHeight - 8) {
          top = viewportHeight - tooltipRect.height - 8
        }

        setTooltipPosition({ top, left })
      }

      // Initial position calculation
      updatePosition()

      // Recalculate on resize
      window.addEventListener("resize", updatePosition)
      return () => window.removeEventListener("resize", updatePosition)
    }
  }, [isVisible, position, mounted])

  const handleMouseEnter = () => {
    setIsVisible(true)
  }

  const handleMouseLeave = () => {
    setIsVisible(false)
  }

  const tooltipContent = isVisible && mounted && (
    <div
      ref={tooltipRef}
      className="fixed p-3 text-sm text-white bg-[#2C3539] rounded shadow-lg pointer-events-none"
      style={{
        top: tooltipPosition.top,
        left: tooltipPosition.left,
        zIndex: 99999,
        width: "max-content",
        maxWidth: "16rem",
      }}
    >
      {content}
      <div
        className={`absolute w-2 h-2 bg-[#2C3539] transform rotate-45 ${
          position === "top"
            ? "bottom-[-4px] left-1/2 -translate-x-1/2"
            : position === "bottom"
              ? "top-[-4px] left-1/2 -translate-x-1/2"
              : position === "left"
                ? "right-[-4px] top-1/2 -translate-y-1/2"
                : "left-[-4px] top-1/2 -translate-y-1/2"
        }`}
      ></div>
    </div>
  )

  return (
    <>
      <div ref={triggerRef} className="inline-block" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
      </div>
      {mounted && createPortal(tooltipContent, document.body)}
    </>
  )
}
