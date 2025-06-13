"use client"

import { useState } from "react"
import Dashboard from "@/components/dashboard"
import IncidentDetails from "@/components/incident-details"
import InquiryManagement from "@/components/inquiry-management"
import Reports from "@/components/reports"
import Header from "@/components/header"
import LiveBadge from "@/components/live-badge"

export default function Home() {
  const [currentView, setCurrentView] = useState<"dashboard" | "incident" | "inquiries" | "reports">("dashboard")
  const [selectedIncidentId, setSelectedIncidentId] = useState<string | null>(null)

  const handleViewIncident = (incidentId: string) => {
    setSelectedIncidentId(incidentId)
    setCurrentView("incident")
  }

  const handleNavigation = (view: "dashboard" | "incident" | "inquiries" | "reports") => {
    setCurrentView(view)
    if (view !== "incident") {
      setSelectedIncidentId(null)
    }
  }

  return (
    <div className="min-h-screen bg-[#1E2526]">
      <Header currentView={currentView} onNavigate={handleNavigation} />
      <LiveBadge />

      <main className="pt-20">
        {currentView === "dashboard" && <Dashboard onViewIncident={handleViewIncident} />}
        {currentView === "incident" && <IncidentDetails incidentId={selectedIncidentId} />}
        {currentView === "inquiries" && <InquiryManagement />}
        {currentView === "reports" && <Reports />}
      </main>
    </div>
  )
}
