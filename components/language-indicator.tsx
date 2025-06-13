"use client"

import { Globe } from "lucide-react"
import Tooltip from "@/components/tooltip"

interface LanguageIndicatorProps {
  languages: string[]
}

export default function LanguageIndicator({ languages }: LanguageIndicatorProps) {
  if (languages.length <= 1) {
    return null
  }

  const languageList = languages.join(", ")

  return (
    <Tooltip content={`Message sent in: ${languageList}`}>
      <div className="flex items-center cursor-help">
        <Globe className="h-4 w-4 text-[#00C4B4]" />
      </div>
    </Tooltip>
  )
}
