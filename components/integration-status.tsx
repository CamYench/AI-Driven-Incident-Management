"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, AlertTriangle, CheckCircle } from "lucide-react"

interface Integration {
  name: string
  status: "connected" | "warning" | "error"
  lastSynced: string
  logs: string[]
}

const integrations: Integration[] = [
  {
    name: "Status Page",
    status: "connected",
    lastSynced: "10:15 AM",
    logs: [
      "10:15 AM - Successfully published incident update",
      "10:00 AM - Connected to Status Page API",
      "09:45 AM - Authenticated with Status Page",
    ],
  },
  {
    name: "Slack",
    status: "connected",
    lastSynced: "10:10 AM",
    logs: [
      "10:10 AM - Message sent to #incidents channel",
      "10:05 AM - Connected to Slack API",
      "09:50 AM - Authenticated with Slack",
    ],
  },
  {
    name: "PagerDuty",
    status: "warning",
    lastSynced: "09:55 AM",
    logs: [
      "09:55 AM - High latency detected (Warning)",
      "09:50 AM - Incident created in PagerDuty",
      "09:45 AM - Connected to PagerDuty API",
    ],
  },
]

export default function IntegrationStatus() {
  const [selectedIntegration, setSelectedIntegration] = useState<Integration | null>(null)

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "connected":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />
      case "error":
        return <AlertTriangle className="h-4 w-4 text-red-500" />
      default:
        return null
    }
  }

  return (
    <>
      <Card className="bg-[#2C3539] border-[#1E2526] shadow-lg drop-shadow-lg">
        <CardHeader>
          <CardTitle className="text-white">INTEGRATION STATUS</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {integrations.map((integration) => (
              <Button
                key={integration.name}
                variant="ghost"
                className="flex items-center justify-between p-3 bg-[#1E2526] hover:bg-[#1E2526] hover:border-[#00C4B4] border border-transparent rounded-md text-left"
                onClick={() => setSelectedIntegration(integration)}
                aria-label={`View ${integration.name} integration details`}
              >
                <div className="flex items-center space-x-2">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      integration.status === "connected"
                        ? "bg-green-500"
                        : integration.status === "warning"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                    }`}
                  ></div>
                  <span className="text-white text-sm">{integration.name}</span>
                </div>
                <Clock className="h-4 w-4 text-[#CCCCCC]" />
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Dialog open={!!selectedIntegration} onOpenChange={(open) => !open && setSelectedIntegration(null)}>
        <DialogContent className="bg-[#2C3539] border-[#1E2526] text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="text-white flex items-center space-x-2">
              {selectedIntegration && (
                <>
                  {getStatusIcon(selectedIntegration.status)}
                  <span>{selectedIntegration.name} Integration</span>
                </>
              )}
            </DialogTitle>
          </DialogHeader>

          {selectedIntegration && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[#CCCCCC]">Status</span>
                <Badge
                  className={`${
                    selectedIntegration.status === "connected"
                      ? "bg-green-500"
                      : selectedIntegration.status === "warning"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                  } text-white`}
                >
                  {selectedIntegration.status.charAt(0).toUpperCase() + selectedIntegration.status.slice(1)}
                </Badge>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#CCCCCC]">Last Synced</span>
                <span className="text-white">{selectedIntegration.lastSynced}</span>
              </div>

              <div>
                <h4 className="text-[#CCCCCC] mb-2">Activity Log</h4>
                <div className="bg-[#1E2526] rounded-md p-3 space-y-2 max-h-40 overflow-y-auto">
                  {selectedIntegration.logs.map((log, index) => (
                    <div key={index} className="text-sm text-white">
                      {log}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end">
                <Button className="bg-[#00C4B4] hover:bg-[#00A89C] text-white">Reconnect</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
