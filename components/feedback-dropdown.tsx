"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ThumbsUp, ThumbsDown, Check } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface FeedbackDropdownProps {
  type: "positive" | "negative"
}

export default function FeedbackDropdown({ type }: FeedbackDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [feedback, setFeedback] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const positiveOptions = ["Clear and concise", "Appropriate tone", "Complete information", "Well structured"]

  const negativeOptions = ["Tone unclear", "Missing details", "Too technical", "Incorrect information"]

  const handleSubmit = () => {
    if (feedback) {
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setIsOpen(false)
        setFeedback("")
      }, 2000)
    }
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          size="sm"
          variant="ghost"
          className="text-[#00C4B4] hover:bg-[#1E2526]"
          aria-label={type === "positive" ? "Provide positive feedback" : "Provide negative feedback"}
        >
          {type === "positive" ? <ThumbsUp className="h-4 w-4" /> : <ThumbsDown className="h-4 w-4" />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white border-[#00C4B4] p-3 w-64 z-[9999]">
        <div className="text-black font-medium mb-2">
          {type === "positive" ? "What was good?" : "What needs improvement?"}
        </div>

        {!submitted ? (
          <>
            <DropdownMenuRadioGroup value={feedback} onValueChange={setFeedback}>
              {(type === "positive" ? positiveOptions : negativeOptions).map((option) => (
                <DropdownMenuRadioItem key={option} value={option} className="text-black cursor-pointer">
                  {option}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>

            <div className="mt-3 flex justify-end">
              <Button
                size="sm"
                onClick={handleSubmit}
                disabled={!feedback}
                className="bg-[#00C4B4] hover:bg-[#00A89C] text-white"
              >
                Submit
              </Button>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center py-2 text-[#00C4B4]">
            <Check className="h-4 w-4 mr-2" />
            <span>Feedback submitted</span>
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
