"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Bot, AlertTriangle, Users, ExternalLink } from "lucide-react"
import { useState } from "react"
import Tooltip from "@/components/tooltip"
import FeedbackDropdown from "@/components/feedback-dropdown"
import LanguageIndicator from "@/components/language-indicator"

interface IncidentDetailsProps {
  incidentId: string | null
}

export default function IncidentDetails({ incidentId }: IncidentDetailsProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [message, setMessage] = useState(
    "Dear Customers, We're experiencing a temporary issue with our email filtering feature. Our team is actively investigating and working to resolve this as quickly as possible. We apologize for any inconvenience and will provide updates as they become available.",
  )
  const [isEscalated, setIsEscalated] = useState(false)
  const [escalatedTo, setEscalatedTo] = useState("")

  const handleEscalate = () => {
    setIsEscalated(true)
    setEscalatedTo("Team Lead")
  }

  if (!incidentId) {
    return (
      <div className="p-6">
        <div className="text-center text-white">
          <AlertTriangle className="h-12 w-12 mx-auto mb-4 text-[#00C4B4]" />
          <h2 className="text-xl font-bold mb-2">No Incident Selected</h2>
          <p className="text-[#CCCCCC]">Please select an incident from the dashboard to view details.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6 space-y-6">
      {/* Incident Summary */}
      <Card className="bg-[#2C3539] border-[#1E2526] shadow-lg drop-shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-4">
              <span className="text-white font-medium">ID: {incidentId}</span>
              <Badge className="bg-red-500 text-white">High</Badge>
              <Badge className="bg-blue-500 text-white">In Progress</Badge>
              <Tooltip
                content={
                  <div>
                    <p className="font-medium mb-1">AI Triage Details</p>
                    <p>This incident was classified with 65% confidence.</p>
                    <p className="mt-1 text-xs">Based on: Error logs, affected services, and similar past incidents.</p>
                  </div>
                }
              >
                <Badge className="bg-purple-500 text-white cursor-help">AI-Triaged (65%)</Badge>
              </Tooltip>
            </div>
            <div className="flex items-center space-x-4 text-[#CCCCCC] text-sm">
              <span>Affected Services: Email Filtering</span>
              <span>Created: 09:00 AM</span>
              <span>Last Updated: 10:00 AM</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Generated Message */}
      <Card className="bg-[#2C3539] border-[#1E2526] shadow-lg drop-shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2 text-white">
              <Tooltip
                content={
                  <div>
                    <p className="font-medium mb-1">Generated Message</p>
                    <p>This message was generated based on:</p>
                    <ul className="list-disc pl-4 mt-1">
                      <li>Incident details</li>
                      <li>Affected services</li>
                      <li>Previous similar incidents</li>
                    </ul>
                    <p className="mt-1 text-xs">Confidence: 87% - Generated in 0.8 seconds</p>
                  </div>
                }
              >
                <div className="flex items-center cursor-help">
                  <Bot className="h-5 w-5 text-[#00C4B4] animate-pulse" />
                  <span className="ml-2">Generated Message</span>
                  <Badge className="ml-2 bg-[#00C4B4] text-white">AI</Badge>
                </div>
              </Tooltip>
            </CardTitle>
            <LanguageIndicator languages={["English", "Spanish", "French"]} />
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {isEditing ? (
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="min-h-32 bg-white text-black"
              aria-label="Edit message content"
            />
          ) : (
            <div className="bg-[#1E2526] p-4 rounded-lg text-white">{message}</div>
          )}

          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              {isEditing ? (
                <>
                  <Button
                    onClick={() => setIsEditing(false)}
                    className="bg-green-600 hover:bg-green-700 text-white"
                    aria-label="Save edited message"
                  >
                    Save
                  </Button>
                  <Button
                    onClick={() => setIsEditing(false)}
                    className="bg-gray-600 hover:bg-gray-700 text-white"
                    aria-label="Cancel editing"
                  >
                    Cancel
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    onClick={() => setIsEditing(true)}
                    className="bg-[#00C4B4] hover:bg-[#00A89C] text-white"
                    aria-label="Edit message"
                  >
                    Edit
                  </Button>
                  <Button className="bg-green-600 hover:bg-green-700 text-white" aria-label="Approve message">
                    Approve
                  </Button>
                  <Button className="bg-gray-600 hover:bg-gray-700 text-white" aria-label="Regenerate message">
                    Regenerate
                  </Button>
                </>
              )}
            </div>

            <div className="flex space-x-2">
              <FeedbackDropdown type="positive" />
              <FeedbackDropdown type="negative" />
            </div>
          </div>
          <div className="flex items-center space-x-2 pt-2 border-t border-[#1E2526]">
            <input
              type="checkbox"
              id="auto-approve"
              className="rounded"
              aria-label="Auto-approve future messages for non-severe incidents"
            />
            <label htmlFor="auto-approve" className="text-sm text-[#CCCCCC]">
              Auto-approve future messages for non-severe incidents
            </label>
          </div>
        </CardContent>
      </Card>

      {/* Logs */}
      <Card className="bg-[#2C3539] border-[#1E2526] shadow-lg drop-shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-white">INCIDENT LOG</CardTitle>
            <Button
              variant="ghost"
              className="text-[#00C4B4] hover:bg-[#1E2526] flex items-center"
              aria-label="View all updates"
            >
              <Users className="h-4 w-4 mr-2" />
              <span>View Updates</span>
              <ExternalLink className="h-3 w-3 ml-1" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <span className="text-[#00C4B4] text-sm font-medium">09:05 AM</span>
              <span className="text-white">Incident detected</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-[#00C4B4] text-sm font-medium">09:10 AM</span>
              <span className="text-white">Engineer assigned</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-[#00C4B4] text-sm font-medium">09:30 AM</span>
              <div className="flex-1">
                <span className="text-white">Update: Investigating root cause</span>
                <Badge className="ml-2 bg-blue-500 text-white text-xs">Engineer Update</Badge>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-[#1E2526]">
            <Button className="bg-[#00C4B4] hover:bg-[#00A89C] text-white" aria-label="Add update to incident log">
              Add Update
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Customer Inquiries */}
      <Card className="bg-[#2C3539] border-[#1E2526] shadow-lg drop-shadow-lg">
        <CardHeader>
          <CardTitle className="text-white">CUSTOMER INQUIRIES</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <span className="text-white">Inquiry #456: "Is this affecting all users?"</span>
            <Button size="sm" className="bg-[#00C4B4] hover:bg-[#00A89C] text-white" aria-label="View inquiry details">
              View
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex space-x-4">
        {!isEscalated ? (
          <Button
            onClick={handleEscalate}
            className="bg-red-600 hover:bg-red-700 text-white"
            aria-label="Escalate incident"
          >
            Escalate
          </Button>
        ) : (
          <Tooltip content="This incident has been escalated and is being handled by the team lead">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white cursor-default" aria-label="Incident escalated">
              Escalated to: {escalatedTo}
            </Button>
          </Tooltip>
        )}
        <Button className="bg-gray-600 hover:bg-gray-700 text-white" aria-label="Close incident">
          Close Incident
        </Button>
      </div>
    </div>
  )
}
