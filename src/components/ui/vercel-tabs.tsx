"use client"

import * as React from "react"
import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

export interface Tab {
  id: string
  label: string
}

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  tabs: Tab[]
  activeTab?: string
  onTabChange?: (tabId: string) => void
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ className, tabs, activeTab, onTabChange, ...props }, ref) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const [activeIndex, setActiveIndex] = useState(0)
    const [hoverStyle, setHoverStyle] = useState<React.CSSProperties>({})
    const [activeStyle, setActiveStyle] = useState<React.CSSProperties>({ left: "0px", width: "0px" })
    const tabRefs = useRef<(HTMLDivElement | null)[]>([])

    const currentIndex = activeTab
      ? Math.max(0, tabs.findIndex((t) => t.id === activeTab))
      : activeIndex

    useEffect(() => {
      if (hoveredIndex !== null) {
        const hoveredElement = tabRefs.current[hoveredIndex]
        if (hoveredElement) {
          const { offsetLeft, offsetWidth } = hoveredElement
          setHoverStyle({
            left: `${offsetLeft}px`,
            width: `${offsetWidth}px`,
          })
        }
      }
    }, [hoveredIndex])

    useEffect(() => {
      const activeElement = tabRefs.current[currentIndex]
      if (activeElement) {
        const { offsetLeft, offsetWidth } = activeElement
        setActiveStyle({
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
        })
      }
    }, [currentIndex, tabs])

    useEffect(() => {
      const frame = requestAnimationFrame(() => {
        const firstElement = tabRefs.current[currentIndex] || tabRefs.current[0]
        if (firstElement) {
          const { offsetLeft, offsetWidth } = firstElement
          setActiveStyle({
            left: `${offsetLeft}px`,
            width: `${offsetWidth}px`,
          })
        }
      })
      return () => cancelAnimationFrame(frame)
    }, [currentIndex])

    return (
      <div 
        ref={ref} 
        className={cn("relative", className)} 
        {...props}
      >
        <div className="relative">
          {/* Hover Highlight Capsule */}
          <div
            className="absolute h-[32px] transition-all duration-300 ease-out bg-white/[0.08] rounded-[8px] flex items-center pointer-events-none"
            style={{
              ...hoverStyle,
              opacity: hoveredIndex !== null ? 1 : 0,
            }}
          />

          {/* Active Indicator Underline */}
          <div
            className="absolute bottom-[-6px] h-[2px] bg-lab-orange shadow-[0_0_10px_rgba(242,121,42,0.8)] transition-all duration-300 ease-out"
            style={activeStyle}
          />

          {/* Tabs List */}
          <div className="relative flex space-x-[4px] items-center">
            {tabs.map((tab, index) => {
              const isActive = index === activeIndex
              return (
                <div
                  key={tab.id}
                  ref={(el) => { tabRefs.current[index] = el }}
                  className={cn(
                    "px-3 py-1.5 cursor-pointer transition-colors duration-300 h-[32px] select-none rounded-[8px]",
                    isActive 
                      ? "text-lab-cream font-bold" 
                      : "text-lab-cream/65 hover:text-lab-cream font-medium"
                  )}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => {
                    setActiveIndex(index)
                    onTabChange?.(tab.id)
                  }}
                >
                  <div className="text-xs sm:text-sm font-oxanium tracking-wider uppercase leading-5 whitespace-nowrap flex items-center justify-center h-full">
                    {tab.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
)
Tabs.displayName = "Tabs"

export { Tabs }
