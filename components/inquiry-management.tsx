"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Search, AlertTriangle, Bot } from "lucide-react"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const inquiries = [
  {
    id: "456",
    customer: "John Doe",
    incident: "123",
    status: "Open",
    lastUpdated: "10:15 AM",
    message: "Is this affecting all users? I'm unable to access my email filtering settings.",
    statusColor: "bg-yellow-500",
    incidentTitle: "Email Filtering Outage",
    incidentSeverity: "High",
    previousResponses: [
      {
        date: "10:05 AM",
        message: "We're investigating the issue and will update you shortly.",
      },
    ],
  },
  {
    id: "457",
    customer: "Jane Smith",
    incident: "124",
    status: "Responded",
    lastUpdated: "10:20 AM",
    message: "When will the login page be fixed? My team can't access the system.",
    statusColor: "bg-blue-500",
    incidentTitle: "Login Page Issue",
    incidentSeverity: "Medium",
    previousResponses: [],
  },
  {
    id: "458",
    customer: "Bob Wilson",
    incident: "123",
    status: "Open",
    lastUpdated: "10:25 AM",
    message: "Are you aware of the email filtering issue? It's been down for an hour.",
    statusColor: "bg-yellow-500",
    incidentTitle: "Email Filtering Outage",
    incidentSeverity: "High",
    previousResponses: [],
  },
]

export default function InquiryManagement() {
  const [selectedInquiry, setSelectedInquiry] = useState<(typeof inquiries)[0] | null>(null)
  const [response, setResponse] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleCloseDialog = () => {
    setIsDialogOpen(false)
    setSelectedInquiry(null)
    setResponse("")
  }

  const handleSaveDraft = () => {
    // In a real app, this would save to backend
    console.log("Draft saved:", response)
    // Show some feedback to user that draft was saved
  }

  return (
    <div className="p-6 space-y-6">
      {/* Inquiries Table */}
      <Card className="bg-[#2C3539] border-[#1E2526] shadow-lg drop-shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-white">CUSTOMER INQUIRIES</CardTitle>

          <div className="flex items-center space-x-4 mt-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search inquiries..."
                className="pl-10 bg-white text-black"
                aria-label="Search inquiries"
              />
            </div>

            <Select>
              <SelectTrigger className="w-32 bg-white text-black" aria-label="Filter by status">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="open">Open</SelectItem>
                <SelectItem value="responded">Responded</SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-40 bg-white text-black" aria-label="Filter by incident ID">
                <SelectValue placeholder="Incident ID" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="123">123</SelectItem>
                <SelectItem value="124">124</SelectItem>
                <SelectItem value="125">125</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>

        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full" aria-label="Customer inquiries table">
              <thead>
                <tr className="bg-[#00C4B4] text-white">
                  <th className="text-left p-3 font-medium">ID</th>
                  <th className="text-left p-3 font-medium">Customer</th>
                  <th className="text-left p-3 font-medium">Incident</th>
                  <th className="text-left p-3 font-medium">Status</th>
                  <th className="text-left p-3 font-medium">Last Updated</th>
                  <th className="text-left p-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {inquiries.map((inquiry, index) => (
                  <tr key={inquiry.id} className={index % 2 === 0 ? "bg-[#1E2526]" : "bg-[#2C3539]"}>
                    <td className="p-3 text-white">{inquiry.id}</td>
                    <td className="p-3 text-white">{inquiry.customer}</td>
                    <td className="p-3 text-white">{inquiry.incident}</td>
                    <td className="p-3">
                      <Badge className={`${inquiry.statusColor} text-white`}>{inquiry.status}</Badge>
                    </td>
                    <td className="p-3 text-white">{inquiry.lastUpdated}</td>
                    <td className="p-3">
                      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                        <DialogTrigger asChild>
                          <Button
                            size="sm"
                            onClick={() => {
                              setSelectedInquiry(inquiry)
                              setIsDialogOpen(true)
                            }}
                            className="bg-[#00C4B4] hover:bg-[#00A89C] text-white"
                            aria-label={`View inquiry ${inquiry.id}`}
                          >
                            View
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-[#2C3539] border-[#1E2526] text-white max-w-2xl">
                          <DialogHeader>
                            <DialogTitle className="text-white">Inquiry Details</DialogTitle>
                          </DialogHeader>

                          {selectedInquiry && (
                            <div className="space-y-4">
                              {/* Incident Context Information */}
                              <Card className="bg-[#1E2526] border-[#2C3539] shadow-md">
                                <CardContent className="p-4">
                                  <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center space-x-2">
                                      <AlertTriangle className="h-4 w-4 text-[#00C4B4]" />
                                      <span className="font-medium">Related Incident</span>
                                    </div>
                                    <Badge
                                      className={
                                        selectedInquiry.incidentSeverity === "High" ? "bg-red-500" : "bg-yellow-500"
                                      }
                                    >
                                      {selectedInquiry.incidentSeverity}
                                    </Badge>
                                  </div>
                                  <div className="text-sm">
                                    <p>
                                      <span className="text-[#CCCCCC]">ID:</span> {selectedInquiry.incident}
                                    </p>
                                    <p>
                                      <span className="text-[#CCCCCC]">Title:</span> {selectedInquiry.incidentTitle}
                                    </p>
                                    <p>
                                      <span className="text-[#CCCCCC]">Status:</span> In Progress
                                    </p>
                                  </div>
                                </CardContent>
                              </Card>

                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <label className="text-sm font-medium text-[#CCCCCC]">Customer</label>
                                  <p className="text-white">{selectedInquiry.customer}</p>
                                </div>
                                <div>
                                  <label className="text-sm font-medium text-[#CCCCCC]">Submitted</label>
                                  <p className="text-white">{selectedInquiry.lastUpdated}</p>
                                </div>
                              </div>

                              <div>
                                <label className="text-sm font-medium text-[#CCCCCC]">Message</label>
                                <div className="bg-[#1E2526] p-3 rounded-lg mt-1">
                                  <p className="text-white">{selectedInquiry.message}</p>
                                </div>
                              </div>

                              {/* Previous Responses */}
                              {selectedInquiry.previousResponses.length > 0 && (
                                <div>
                                  <label className="text-sm font-medium text-[#CCCCCC]">Previous Responses</label>
                                  <div className="space-y-2 mt-1">
                                    {selectedInquiry.previousResponses.map((resp, idx) => (
                                      <div
                                        key={idx}
                                        className="bg-[#1E2526] p-3 rounded-lg border-l-2 border-[#00C4B4]"
                                      >
                                        <div className="text-xs text-[#CCCCCC] mb-1">{resp.date}</div>
                                        <p className="text-white text-sm">{resp.message}</p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              <div>
                                <label className="text-sm font-medium text-[#CCCCCC]">Response</label>
                                <Textarea
                                  value={response}
                                  onChange={(e) => setResponse(e.target.value)}
                                  placeholder="Type your response here..."
                                  className="mt-1 min-h-32 bg-white text-black"
                                  aria-label="Response text area"
                                />
                                <p className="text-xs text-[#CCCCCC] mt-1">
                                  Press Tab to navigate, Shift+Enter to add a new line
                                </p>
                              </div>

                              <div className="flex justify-between">
                                <Button
                                  onClick={handleSaveDraft}
                                  className="bg-gray-600 hover:bg-gray-700 text-white flex items-center"
                                  aria-label="Save draft response"
                                >
                                  <Bot className="h-4 w-4 mr-2" />
                                  Draft Response
                                </Button>

                                <div className="flex space-x-2">
                                  <Button
                                    onClick={handleCloseDialog}
                                    className="bg-gray-600 hover:bg-gray-700 text-white"
                                    aria-label="Close dialog"
                                  >
                                    Close
                                  </Button>
                                  <Button
                                    className="bg-[#00C4B4] hover:bg-[#00A89C] text-white"
                                    aria-label="Send response to customer"
                                  >
                                    Send Response
                                  </Button>
                                </div>
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-[#2C3539] border-[#1E2526] shadow-lg drop-shadow-lg">
        <CardHeader>
          <CardTitle className="text-white">INTEGRATION STATUS</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-white text-sm">Status Page</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-white text-sm">Slack</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-white text-sm">PagerDuty</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
