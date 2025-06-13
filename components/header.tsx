"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ChevronDown, LogOut } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface HeaderProps {
  currentView: "dashboard" | "incident" | "inquiries" | "reports"
  onNavigate: (view: "dashboard" | "incident" | "inquiries" | "reports") => void
}

export default function Header({ currentView, onNavigate }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-black border-b border-[#2C3539]">
      <div className="flex items-center justify-between h-full px-6">
        <div className="flex items-center space-x-8">
          <img src="/abnormal-logo.png" alt="Abnormal Security" className="h-8" />

          <nav className="flex space-x-6">
            <button
              onClick={() => onNavigate("dashboard")}
              className={`text-sm font-medium transition-colors hover:text-[#00C4B4] ${
                currentView === "dashboard" ? "text-[#00C4B4]" : "text-white"
              }`}
              aria-label="Dashboard"
            >
              DASHBOARD
            </button>
            <button
              onClick={() => onNavigate("incident")}
              className={`text-sm font-medium transition-colors hover:text-[#00C4B4] ${
                currentView === "incident" ? "text-[#00C4B4]" : "text-white"
              }`}
              aria-label="Incidents"
            >
              INCIDENTS
            </button>
            <button
              onClick={() => onNavigate("inquiries")}
              className={`text-sm font-medium transition-colors hover:text-[#00C4B4] ${
                currentView === "inquiries" ? "text-[#00C4B4]" : "text-white"
              }`}
              aria-label="Inquiries"
            >
              INQUIRIES
            </button>
            <button
              onClick={() => onNavigate("reports")}
              className={`text-sm font-medium transition-colors hover:text-[#00C4B4] ${
                currentView === "reports" ? "text-[#00C4B4]" : "text-white"
              }`}
              aria-label="Reports"
            >
              REPORTS
            </button>
          </nav>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center space-x-2 text-white hover:text-[#00C4B4]"
              aria-label="User menu"
            >
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-[#2C3539] text-white">JD</AvatarFallback>
              </Avatar>
              <span className="text-sm">John Doe</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-[#2C3539] border-[#1E2526]">
            <DropdownMenuItem className="text-white hover:bg-[#1E2526] hover:text-[#00C4B4]">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
