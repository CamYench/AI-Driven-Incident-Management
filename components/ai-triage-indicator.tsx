"use client"

import { Badge } from "@/components/ui/badge"
import { Bot, Zap, AlertCircle } from "lucide-react"
import Tooltip from "@/components/tooltip"

interface AITriageIndicatorProps {
  severity: "High" | "Medium" | "Low"
  isAutoTriaged: boolean
  confidence: number
  hasFailed?: boolean
}

export default function AITriageIndicator({
  severity,
  isAutoTriaged,
  confidence,
  hasFailed = false,
}: AITriageIndicatorProps) {
  const getTriageIcon = () => {
    if (hasFailed) return <AlertCircle className="h-3 w-3" />
    if (severity === "High") return <AlertCircle className="h-3 w-3" />
    if (isAutoTriaged) return <Zap className="h-3 w-3" />
    return <Bot className="h-3 w-3" />
  }

  const getTriageColor = () => {
    if (hasFailed) return "bg-red-500"
    if (severity === "High") return "bg-red-500"
    if (isAutoTriaged) return "bg-[#00C4B4]"
    return "bg-purple-500"
  }

  const getTriageText = () => {
    if (hasFailed) return "AI Triage Failed"
    if (severity === "High") return "Manual Review Required"
    if (isAutoTriaged) return `Auto-Triaged`
    return "AI-Assisted"
  }

  const getTooltipContent = () => {
    if (hasFailed) {
      return (
        <div>
          <p className="font-medium mb-1">AI Triage Failed</p>
          <p>The system was unable to automatically triage this incident. Manual review is required.</p>
          <p className="mt-1 text-xs">Reason: Insufficient data or unusual pattern detected.</p>
        </div>
      )
    }

    if (severity === "High") {
      return (
        <div>
          <p className="font-medium mb-1">Manual Review Required</p>
          <p>This high-severity incident requires human review before any automated actions.</p>
          <p className="mt-1 text-xs">AI confidence: {confidence}% - Below threshold for auto-handling.</p>
        </div>
      )
    }

    if (isAutoTriaged) {
      return (
        <div>
          <p className="font-medium mb-1">Auto-Triaged with {confidence}% Confidence</p>
          <p>The AI system has automatically classified this incident based on:</p>
          <ul className="list-disc pl-4 mt-1 text-xs">
            <li>Similar past incidents</li>
            <li>Affected services pattern</li>
            <li>Error logs analysis</li>
          </ul>
        </div>
      )
    }

    return (
      <div>
        <p className="font-medium mb-1">AI-Assisted Triage</p>
        <p>This incident was triaged with AI assistance but required human verification.</p>
        <p className="mt-1 text-xs">AI confidence: {confidence}% - Near threshold for auto-handling.</p>
      </div>
    )
  }

  return (
    <Tooltip content={getTooltipContent()}>
      <Badge className={`${getTriageColor()} text-white flex items-center space-x-1`}>
        {getTriageIcon()}
        <span className="text-xs ml-1">{getTriageText()}</span>
        {isAutoTriaged && !hasFailed && <span className="text-xs ml-1">({confidence}%)</span>}
      </Badge>
    </Tooltip>
  )
}
