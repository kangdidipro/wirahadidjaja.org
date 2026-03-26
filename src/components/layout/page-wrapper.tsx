"use client"

import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "./app-sidebar"
import { Bell, Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-background">
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-6 sticky top-0 bg-background/80 backdrop-blur-md z-30">
          <div className="flex items-center gap-4">
            <SidebarTrigger className="-ml-1" />
            <div className="hidden md:flex relative w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input 
                type="search" 
                placeholder="Cari sesuatu..." 
                className="w-full bg-muted/50 rounded-full py-1.5 pl-9 pr-4 text-sm outline-none focus:ring-1 focus:ring-primary transition-all"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            {/* Sponsor Banner Logo */}
            <div className="hidden sm:flex items-center gap-2 border-r pr-6 border-muted-foreground/20">
              <span className="text-[9px] text-muted-foreground uppercase tracking-widest font-bold whitespace-nowrap">Supported by</span>
              <Image 
                src="/telkom.jpeg" 
                alt="Telkom Logo" 
                width={70} 
                height={24} 
                className="object-contain opacity-90"
              />
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-accent border-2 border-background"></span>
              </Button>
              <div className="h-8 w-8 rounded-full bg-primary/10 border flex items-center justify-center cursor-pointer hover:bg-primary/20 transition-colors">
                <User className="h-4 w-4 text-primary" />
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6 lg:p-10 max-w-7xl mx-auto w-full">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
