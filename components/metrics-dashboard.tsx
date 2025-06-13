"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Clock, CheckCircle, AlertTriangle } from "lucide-react"
import Tooltip from "@/components/tooltip"

export default function MetricsDashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {/* PRD 5.1: Time to Communicate */}
      <Card className="bg-[#2C3539] border-[#1E2526] shadow-lg drop-shadow-xl">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-[#CCCCCC] flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            Avg Time to Communicate
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-[#00C4B4]">45s</div>
          <div className="flex items-center justify-between mt-1">
            <div className="flex items-center">
              <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
              <span className="text-xs text-green-500">95% improvement</span>
            </div>
            <Tooltip content="Target: 60s - Performance exceeds target by 25%" position="bottom">
              <Badge className="bg-green-500 text-white text-xs">Target: 60s</Badge>
            </Tooltip>
          </div>
        </CardContent>
      </Card>

      {/* PRD 5.2: Message Consistency */}
      <Card className="bg-[#2C3539] border-[#1E2526] shadow-lg drop-shadow-xl">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-[#CCCCCC] flex items-center">
            <CheckCircle className="h-4 w-4 mr-2" />
            Message Consistency
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-[#00C4B4]">92%</div>
          <div className="flex justify-between items-center mt-1">
            <span className="text-xs text-[#CCCCCC]">Last week: 88%</span>
            <Tooltip content="Target: 90% - Performance exceeds target by 2%" position="bottom">
              <Badge className="bg-green-500 text-white text-xs">Target: 90%</Badge>
            </Tooltip>
          </div>
        </CardContent>
      </Card>

      {/* PRD 5.3: Accuracy */}
      <Card className="bg-[#2C3539] border-[#1E2526] shadow-lg drop-shadow-xl">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-[#CCCCCC] flex items-center">
            <AlertTriangle className="h-4 w-4 mr-2" />
            Message Accuracy
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-[#00C4B4]">97%</div>
          <div className="flex justify-between items-center mt-1">
            <span className="text-xs text-[#CCCCCC]">Last week: 95%</span>
            <Tooltip content="Target: 95% - Performance exceeds target by 2%" position="bottom">
              <Badge className="bg-green-500 text-white text-xs">Target: 95%</Badge>
            </Tooltip>
          </div>
        </CardContent>
      </Card>

      {/* PRD 5.6: Adoption Rate */}
      <Card className="bg-[#2C3539] border-[#1E2526] shadow-lg drop-shadow-xl">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-[#CCCCCC]">AI Workflow Adoption</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-[#00C4B4]">99%</div>
          <div className="flex justify-between items-center mt-1">
            <span className="text-xs text-[#CCCCCC]">Last week: 97%</span>
            <Tooltip content="Target: 99% - Performance meets target" position="bottom">
              <Badge className="bg-green-500 text-white text-xs">Target: 99%</Badge>
            </Tooltip>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
