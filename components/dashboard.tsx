"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { RefreshCw, Search, AlertTriangle } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import MetricsDashboard from "@/components/metrics-dashboard"
import AITriageIndicator from "@/components/ai-triage-indicator"
import IntegrationStatus from "@/components/integration-status"
import { useState } from "react"

interface DashboardProps {
  onViewIncident: (incidentId: string) => void
}

const incidents = [
  {
    id: "123",
    severity: "High" as const,
    status: "In Progress",
    affectedServices: "Email Filtering",
    lastUpdated: "10:00 AM",
    severityColor: "bg-red-500",
    isAutoTriaged: false,
    confidence: 65,
    hasFailed: false,
    needsManualReview: true,
  },
  {
    id: "124",
    severity: "Medium" as const,
    status: "Open",
    affectedServices: "Login Page",
    lastUpdated: "09:45 AM",
    severityColor: "bg-yellow-500",
    isAutoTriaged: true,
    confidence: 87,
    hasFailed: false,
    needsManualReview: false,
  },
  {
    id: "125",
    severity: "Low" as const,
    status: "Resolved",
    affectedServices: "Dashboard",
    lastUpdated: "09:30 AM",
    severityColor: "bg-green-500",
    isAutoTriaged: true,
    confidence: 94,
    hasFailed: false,
    needsManualReview: false,
  },
  {
    id: "126",
    severity: "Medium" as const,
    status: "Open",
    affectedServices: "API Gateway",
    lastUpdated: "09:15 AM",
    severityColor: "bg-yellow-500",
    isAutoTriaged: false,
    confidence: 0,
    hasFailed: true,
    needsManualReview: true,
  },
]

export default function Dashboard({ onViewIncident }: DashboardProps) {
  const [showManualReviewOnly, setShowManualReviewOnly] = useState(false)

  const filteredIncidents = showManualReviewOnly
    ? incidents.filter((incident) => incident.needsManualReview)
    : incidents

  const manualReviewCount = incidents.filter((incident) => incident.needsManualReview).length

  return (
    <div className="p-6 space-y-6">
      {/* PRD Success Criteria Metrics */}
      <MetricsDashboard />

      {/* Operational Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-[#2C3539] border-[#1E2526] shadow-lg drop-shadow-xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-[#CCCCCC]">Active Incidents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-[#00C4B4]">5</div>
          </CardContent>
        </Card>

        <Card className="bg-[#2C3539] border-[#1E2526] shadow-lg drop-shadow-xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-[#CCCCCC]">High-Severity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-[#00C4B4]">1</div>
          </CardContent>
        </Card>

        <Card className="bg-[#2C3539] border-[#1E2526] shadow-lg drop-shadow-xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-[#CCCCCC]">Avg Response Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-[#00C4B4]">15m</div>
          </CardContent>
        </Card>

        <Card className="bg-[#2C3539] border-[#1E2526] shadow-lg drop-shadow-xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-[#CCCCCC]">Customer Satisfaction</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-[#00C4B4]">4.5/5</div>
          </CardContent>
        </Card>
      </div>

      {/* Incidents Table */}
      <Card className="bg-[#2C3539] border-[#1E2526] shadow-lg drop-shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-bold text-white">INCIDENTS</CardTitle>
            <div className="flex items-center space-x-2">
              <Button
                onClick={() => setShowManualReviewOnly(!showManualReviewOnly)}
                className={`${
                  showManualReviewOnly ? "bg-gray-600 hover:bg-gray-700" : "bg-orange-600 hover:bg-orange-700"
                } text-white flex items-center`}
                aria-label={showManualReviewOnly ? "Show all incidents" : "Show manual review only"}
              >
                <AlertTriangle className="h-4 w-4 mr-2" />
                {showManualReviewOnly ? "Show All" : `Manual Review (${manualReviewCount})`}
              </Button>
              <Button
                size="sm"
                className="bg-[#00C4B4] hover:bg-[#00A89C] text-white"
                aria-label="Refresh incidents list"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh
              </Button>
            </div>
          </div>

          <div className="flex items-center space-x-4 mt-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search incidents..."
                className="pl-10 bg-white text-black"
                aria-label="Search incidents"
              />
            </div>

            <Select>
              <SelectTrigger className="w-32 bg-white text-black" aria-label="Filter by severity">
                <SelectValue placeholder="Severity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-32 bg-white text-black" aria-label="Filter by status">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="open">Open</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="resolved">Resolved</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>

        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full" aria-label="Incidents table">
              <thead>
                <tr className="bg-[#00C4B4] text-white">
                  <th className="text-left p-3 font-medium">ID</th>
                  <th className="text-left p-3 font-medium">Severity</th>
                  <th className="text-left p-3 font-medium">Status</th>
                  <th className="text-left p-3 font-medium">AI Triage</th>
                  <th className="text-left p-3 font-medium">Affected Services</th>
                  <th className="text-left p-3 font-medium">Last Updated</th>
                  <th className="text-left p-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredIncidents.map((incident, index) => (
                  <tr key={incident.id} className={index % 2 === 0 ? "bg-[#1E2526]" : "bg-[#2C3539]"}>
                    <td className="p-3 text-white">{incident.id}</td>
                    <td className="p-3">
                      <Badge className={`${incident.severityColor} text-white`}>{incident.severity}</Badge>
                    </td>
                    <td className="p-3 text-white">{incident.status}</td>
                    <td className="p-3">
                      <AITriageIndicator
                        severity={incident.severity}
                        isAutoTriaged={incident.isAutoTriaged}
                        confidence={incident.confidence}
                        hasFailed={incident.hasFailed}
                      />
                    </td>
                    <td className="p-3 text-white">{incident.affectedServices}</td>
                    <td className="p-3 text-white">{incident.lastUpdated}</td>
                    <td className="p-3">
                      <Button
                        size="sm"
                        onClick={() => onViewIncident(incident.id)}
                        className="bg-[#00C4B4] hover:bg-[#00A89C] text-white"
                        aria-label={`View incident ${incident.id}`}
                      >
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {showManualReviewOnly && filteredIncidents.length === 0 && (
            <div className="text-center py-8 text-[#CCCCCC]">No incidents requiring manual review at this time.</div>
          )}
        </CardContent>
      </Card>

      {/* Integration Status */}
      <IntegrationStatus />
    </div>
  )
}
