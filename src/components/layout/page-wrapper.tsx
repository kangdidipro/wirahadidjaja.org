"use client"

import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "./app-sidebar"
import { Bell, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-background">
        <header className="flex h-20 shrink-0 items-center justify-between gap-4 border-b px-6 sticky top-0 bg-background/80 backdrop-blur-md z-30">
          <div className="flex items-center gap-4 flex-1 overflow-hidden">
            <SidebarTrigger className="-ml-1" />
            <div className="relative h-14 w-full max-w-[600px]">
              <Image 
                src="/banner_wirahadidjaja.jpg" 
                alt="Banner Wirahadidjaja" 
                fill 
                className="object-contain object-left"
                priority
              />
            </div>
          </div>
          
          <div className="flex items-center gap-6 shrink-0">
            {/* Sponsor Logo on the right */}
            <div className="hidden lg:flex items-center gap-3 pr-4 border-r mr-2">
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Supported by</span>
              <div className="relative h-10 w-24">
                <Image 
                  src="/telkom.jpeg" 
                  alt="Telkom Logo" 
                  fill 
                  className="object-contain opacity-80" 
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="relative hidden sm:flex">
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
