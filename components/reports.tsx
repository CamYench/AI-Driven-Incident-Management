"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Download, FileText } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const reports = [
  {
    id: "REP-123",
    incidentId: "123",
    date: "June 10, 2025",
    title: "Email Filtering Outage",
    status: "Complete",
    lessonsLearned: 3,
  },
  {
    id: "REP-124",
    incidentId: "124",
    date: "June 9, 2025",
    title: "Login Page Issue",
    status: "In Progress",
    lessonsLearned: 2,
  },
  {
    id: "REP-125",
    incidentId: "125",
    date: "June 8, 2025",
    title: "Dashboard Performance",
    status: "Complete",
    lessonsLearned: 5,
  },
]

export default function Reports() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between pr-20">
        <h1 className="text-2xl font-bold text-white">POST-INCIDENT REPORTS</h1>
        <Button className="bg-[#00C4B4] hover:bg-[#00A89C] text-white">
          <FileText className="h-4 w-4 mr-2" />
          Generate New Report
        </Button>
      </div>

      <Card className="bg-[#2C3539] border-[#1E2526] shadow-lg drop-shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-bold text-white">REPORTS</CardTitle>
          </div>

          <div className="flex items-center space-x-4 mt-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Search reports..." className="pl-10 bg-white text-black" />
            </div>

            <Select>
              <SelectTrigger className="w-40 bg-white text-black">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="complete">Complete</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-40 bg-white text-black">
                <SelectValue placeholder="Date Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Time</SelectItem>
                <SelectItem value="week">Last Week</SelectItem>
                <SelectItem value="month">Last Month</SelectItem>
                <SelectItem value="quarter">Last Quarter</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>

        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#00C4B4] text-white">
                  <th className="text-left p-3 font-medium">Report ID</th>
                  <th className="text-left p-3 font-medium">Incident ID</th>
                  <th className="text-left p-3 font-medium">Date</th>
                  <th className="text-left p-3 font-medium">Title</th>
                  <th className="text-left p-3 font-medium">Status</th>
                  <th className="text-left p-3 font-medium">Lessons Learned</th>
                  <th className="text-left p-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((report, index) => (
                  <tr key={report.id} className={index % 2 === 0 ? "bg-[#1E2526]" : "bg-[#2C3539]"}>
                    <td className="p-3 text-white">{report.id}</td>
                    <td className="p-3 text-white">{report.incidentId}</td>
                    <td className="p-3 text-white">{report.date}</td>
                    <td className="p-3 text-white">{report.title}</td>
                    <td className="p-3">
                      <Badge className={`${report.status === "Complete" ? "bg-green-500" : "bg-blue-500"} text-white`}>
                        {report.status}
                      </Badge>
                    </td>
                    <td className="p-3 text-white">{report.lessonsLearned}</td>
                    <td className="p-3">
                      <Button
                        size="sm"
                        className="bg-[#00C4B4] hover:bg-[#00A89C] text-white"
                        aria-label={`Download report ${report.id}`}
                      >
                        <Download className="h-4 w-4" />
                      </Button>
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
          <CardTitle className="text-white">LESSONS LEARNED SUMMARY</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#1E2526] p-4 rounded-lg">
              <h3 className="text-[#00C4B4] font-medium mb-2">Communication</h3>
              <ul className="text-white text-sm space-y-2">
                <li>• Faster initial notifications needed</li>
                <li>• More frequent status updates</li>
                <li>• Clearer technical explanations</li>
              </ul>
            </div>
            <div className="bg-[#1E2526] p-4 rounded-lg">
              <h3 className="text-[#00C4B4] font-medium mb-2">Technical</h3>
              <ul className="text-white text-sm space-y-2">
                <li>• Improve monitoring coverage</li>
                <li>• Add redundancy for critical services</li>
                <li>• Enhance automated recovery</li>
              </ul>
            </div>
            <div className="bg-[#1E2526] p-4 rounded-lg">
              <h3 className="text-[#00C4B4] font-medium mb-2">Process</h3>
              <ul className="text-white text-sm space-y-2">
                <li>• Streamline escalation procedures</li>
                <li>• Better cross-team coordination</li>
                <li>• Improve documentation access</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
